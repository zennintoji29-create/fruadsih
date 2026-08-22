import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('[Supabase] Initialized cloud client successfully with project URL:', supabaseUrl);
  } catch (err) {
    console.error('[Supabase] Failed to initialize Supabase client:', err.message);
  }
} else {
  console.warn('[Supabase] Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment variables.');
}

/**
 * Fetch a threat record by identifier (VPA, Phone, or URL)
 * Checks Supabase PostgreSQL table 'threat_registry'
 */
export async function getSupabaseThreat(identifier) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('threat_registry')
      .select('*')
      .eq('identifier', identifier.trim().toLowerCase())
      .maybeSingle();

    if (error) {
      console.warn('[Supabase] Query error for identifier', identifier, ':', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error('[Supabase] Error fetching threat:', err.message);
    return null;
  }
}

/**
 * Log a transaction evaluation to Supabase 'transaction_logs'
 */
export async function logSupabaseTransaction(txLog) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('transaction_logs')
      .insert([{
        sender_vpa: txLog.senderVpa || txLog.sender_vpa,
        receiver_vpa: txLog.receiverVpa || txLog.receiver_vpa,
        amount: txLog.amount,
        risk_score: txLog.riskScore || txLog.risk_score,
        action_taken: txLog.actionTaken || txLog.action_taken || 'ALLOWED',
        explanation: txLog.explanation,
        metadata: txLog.metadata || {}
      }])
      .select();

    if (error) {
      console.warn('[Supabase] Transaction insert error:', error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error('[Supabase] Error logging transaction:', err.message);
    return null;
  }
}
