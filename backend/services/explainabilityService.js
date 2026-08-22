export class ExplainabilityService {
  /**
   * Generates structured, transparent explainability payloads for the end-user and bank ops
   */
  static generateExplanation({
    riskScore,
    riskLevel,
    reasons = [],
    threatData = null,
    coercionDetected = false,
    amountExceeded = false,
    amount = 0,
    maxLimit = 10000,
    language = 'en'
  }) {
    const isHindi = language === 'hi';
    const bulletPoints = [];
    const contrastiveReasons = [];

    // 1. Threat Registry Factor
    if (threatData && threatData.isBlacklisted) {
      bulletPoints.push({
        severity: 'CRITICAL',
        code: 'KNOWN_SCAMMER_MATCH',
        title: isHindi ? 'राष्ट्रीय साइबर अपराध डेटाबेस में दर्ज खाता' : 'Known Scammer Record Found',
        description: isHindi
          ? `यह UPI ID (${threatData.identifier}) I4C/NPCI साइबर सेल डेटाबेस में धोखाधड़ी के लिए दर्ज है (${threatData.reportCount} शिकायतें)।`
          : `This recipient (${threatData.identifier}) has been reported ${threatData.reportCount} times in national cybercrime databases.`
      });
    } else if (threatData && threatData.riskScore > 50) {
      bulletPoints.push({
        severity: 'HIGH',
        code: 'SUSPICIOUS_HEURISTIC',
        title: isHindi ? 'संदिग्ध खाता पैटर्न' : 'Suspicious Account Pattern',
        description: threatData.details
      });
    }

    // 2. Coercion / Active Call Factor
    if (coercionDetected) {
      bulletPoints.push({
        severity: 'HIGH',
        code: 'ACTIVE_COERCION_CALL',
        title: isHindi ? 'सक्रिय कॉल पर दबाव का संकेत' : 'Active Call / Social Engineering Coercion',
        description: isHindi
          ? 'भुगतान के दौरान आप एक अज्ञात नंबर के साथ सक्रिय फोन कॉल पर हैं। धोखाधड़ी करने वाले अक्सर कॉल पर रहकर पैसे ट्रांसफर करवाते हैं।'
          : 'You are on an active call during this payment. Scammers frequently keep victims on call to prevent independent verification.'
      });
    }

    // 3. User Safety Limit Exceeded
    if (amountExceeded) {
      bulletPoints.push({
        severity: 'MEDIUM',
        code: 'USER_THRESHOLD_EXCEEDED',
        title: isHindi ? 'आपकी सुरक्षा सीमा से अधिक राशि' : 'Safety Limit Exceeded',
        description: isHindi
          ? `यह राशि (₹${amount}) आपकी निर्धारित सुरक्षा सीमा (₹${maxLimit}) से अधिक है।`
          : `Amount (₹${amount}) exceeds your configured safety threshold of ₹${maxLimit}.`
      });
    }

    // 3.5 Suspicious Message / SMS Extortion Triggers
    if (Array.isArray(reasons)) {
      reasons.forEach(r => {
        if (r.includes('coercion / extortion') || r.includes('indicator') || r.includes('note contains')) {
          bulletPoints.unshift({
            severity: 'CRITICAL',
            code: 'COERCIVE_MESSAGE_PATTERN',
            title: 'Extortion / Impersonation In Message',
            description: r
          });
        }
      });
    }

    // 4. Contrastive Explanation (Why blocked vs Why allowed)
    if (riskScore >= 70) {
      contrastiveReasons.push(
        isHindi
          ? 'यह चेतावनी सिर्फ राशि के कारण नहीं, बल्कि प्राप्तकर्ता खाते के उच्च जोखिम रिकॉर्ड के कारण है।'
          : 'This alert is triggered primarily by the recipient VPA risk rating and coercive context, not just transaction volume.'
      );
    } else if (amountExceeded && (!threatData || !threatData.isBlacklisted)) {
      contrastiveReasons.push(
        isHindi
          ? 'प्राप्तकर्ता खाता ब्लैकलिस्टेड नहीं है, लेकिन राशि आपकी सीमा से अधिक होने के कारण पुष्टि आवश्यक है।'
          : 'The recipient is not blacklisted, but manual confirmation is required due to the large amount.'
      );
    }

    // Fallback if safe
    if (bulletPoints.length === 0) {
      bulletPoints.push({
        severity: 'LOW',
        code: 'VERIFIED_CLEAN',
        title: isHindi ? 'सुरक्षित लेनदेन' : 'Clean Transaction Profile',
        description: isHindi
          ? 'प्राप्तकर्ता और उपकरण में कोई संदिग्ध गतिविधि नहीं पाई गई।'
          : 'Recipient VPA and device interaction patterns show normal, safe behavior.'
      });
    }

    const summary = isHindi
      ? (riskScore >= 70 
          ? `⚠️ उच्च जोखिम स्कोर (${riskScore}/100): भुगतान करने से पहले कृपया विवरण ध्यानपूर्वक जांचें।` 
          : `✅ सामान्य जोखिम स्कोर (${riskScore}/100): लेनदेन सुरक्षित प्रतीत होता है।`)
      : (riskScore >= 70 
          ? `⚠️ High Risk Score (${riskScore}/100): Fraud patterns detected. Verify recipient authenticity.` 
          : `✅ Safe Risk Score (${riskScore}/100): Transaction passes pre-flight safety checks.`);

    return {
      summary,
      bulletPoints,
      contrastiveReasons,
      userGuidance: {
        canBypassWithConfirmation: riskLevel !== 'CRITICAL_BLOCKED',
        overrideDisclaimer: isHindi
          ? 'यदि आप प्राप्तकर्ता को व्यक्तिगत रूप से जानते हैं, तो आप पुष्टि करके भुगतान जारी रख सकते हैं।'
          : 'If this is a known, legitimate urgent payment, you can proceed by entering your biometric confirmation.'
      }
    };
  }
}
