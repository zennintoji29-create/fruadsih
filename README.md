VERIX: AI-POWERED PROACTIVE CYBER FRAUD INTERCEPTOR AND IN-CALL DEFENSE SYSTEM
Master Technical Architecture, Technology Stack, Benefits, and System Blueprint


1. EXECUTIVE SUMMARY AND PROBLEM LANDSCAPE

The Digital Arrest and Cyber Extortion Epidemic in India:
India currently faces a severe surge in organized cyber financial extortion, resulting in direct citizen losses exceeding 1,750+ Crores annually across more than 1.2 million reported cases. The primary attack vectors driving this crisis include:
1. Digital Arrest and Fake Police Scams: Extortion syndicates impersonate CBI, Mumbai Police, State Cyber Cells, or Customs officers over voice and video calls, fabricating fictitious arrest warrants or drug parcel allegations to coerce immediate financial transfers.
2. Utility Disconnection Scams: Automated and live calls claiming power connections will be cut tonight unless immediate payment is made to a personal UPI handle.
3. Task and Part-Time Job Scams: High-yield investment and rating schemes demanding upfront deposits to freshly created mule accounts.
4. Coerced UPI and Malicious QR Codes: Manipulation of transaction payloads and intimidation-based fund transfers while the victim is panicked.

Why Existing Security Infrastructures Fail:
Current national cybercrime countermeasures—such as the 1930 National Cybercrime Reporting Portal, Sanchar Saathi Chakshu, and post-fraud bank freeze requests—are entirely reactive. They only begin investigation after a crime has occurred and the victim reports the loss. In modern UPI architecture, automated mule account networks distribute stolen funds across 20 to 30 tiered accounts within 120 seconds, rendering post-facto recovery virtually impossible.

The VERIX Proactive Interception Paradigm:
VERIX shifts the paradigm from post-fraud reporting to real-time pre-transaction defense. It operates as an active, on-device and cloud-synchronized firewall that evaluates risk signals at the exact point of vulnerability: while the phone is ringing, during active in-call conversations, and before the user confirms a UPI payment with their PIN.


2. COMPREHENSIVE TECHNOLOGY STACK BREAKDOWN AND WHY WE USED IT

Tier 1: Frontend and Client User Interface

1. React 18
- What It Does: Serves as the core reactive UI framework powering both the mobile application and the bank administrative web console.
- Why We Used It: Enables a unified, single-codebase architecture across mobile APK and web browsers, eliminating code duplication and ensuring state synchronization.
- Key Benefits and Advantages: High-performance Virtual DOM reconciliation ensures smooth 60 FPS UI transitions, instantaneous countdown timer updates during security cooldowns, and seamless multi-language localization switching.

2. Vite 6
- What It Does: Acts as the modern frontend build pipeline, local development server, and asset bundler.
- Why We Used It: Legacy bundlers like Webpack suffer from slow build times and heavy bundle sizes that degrade mobile web performance.
- Key Benefits and Advantages: Sub-second Hot Module Replacement (HMR) during engineering and highly optimized production chunks that ensure near-zero launch latency on low-end mobile devices.

3. Tailwind CSS and Custom Design Tokens
- What It Does: Defines the visual styling rules, responsive layout grids, and cyber-defense theme tokens.
- Why We Used It: Avoids heavy external UI component libraries while allowing granular control over dark-mode aesthetics, glowing security borders, and glassmorphism.
- Key Benefits and Advantages: Zero CSS bloat, clean visual hierarchy, and high-visibility status indicators (emerald green for safe, amber for caution, crimson red for critical blocked) that convey urgency to users under psychological stress.

4. Lucide React Icons
- What It Does: Renders lightweight scalable vector iconography across the user interface.
- Why We Used It: Clean, semantic visual cues are critical in security applications where icons communicate threat statuses faster than text.
- Key Benefits and Advantages: Crisp rendering across all display resolutions with minimal bundle footprint.


Tier 2: Mobile Native Bridge and Hardware Integration Layer

1. Capacitor 8 Core
- What It Does: Bridges the web application logic with native Android operating system APIs.
- Why We Used It: Provides direct, native access to Android Telephony, Foreground Services, and hardware sensors without the fragmentation and version fragility of React Native or Flutter.
- Key Benefits and Advantages: Enables native Java background services to communicate bi-directionally with the JavaScript UI, combining web agility with native Android performance.

2. Capacitor App Plugin
- What It Does: Listens to Android system-level lifecycle events and application state transitions.
- Why We Used It: Android devices rely on hardware back buttons and gesture navigation that can break standard single-page application routing.
- Key Benefits and Advantages: Intercepts hardware back button presses—closing open modals first, then returning to Home, and safely minimizing the app without crashing.

3. Capacitor Haptics Plugin
- What It Does: Controls the mobile device's internal linear vibration motor.
- Why We Used It: Visual alerts can be missed if a user is panicked or looking away from the screen during a phone call.
- Key Benefits and Advantages: Delivers physical tactile warnings (distinct double-pulses for scam calls and sustained vibrations for blocked payments) that command immediate physical attention.

4. Capacitor Local Notifications Plugin
- What It Does: Dispatches high-priority in-app and system-tray notification banners.
- Why We Used It: Allows background services to communicate urgent threat advisories into the Android notification shade.
- Key Benefits and Advantages: Interactive notification action buttons allow users to launch one-tap speech recording without manually searching for the app icon.

5. Aparajita Biometric Auth Plugin
- What It Does: Connects to the native Android BiometricPrompt framework for fingerprint and facial verification.
- Why We Used It: Passwords and PINs can be coerced from victims over the phone; physical biometric authentication forces a conscious, deliberate physical interaction.
- Key Benefits and Advantages: Enforces step-up authentication for medium-risk transactions (score 40 to 69), ensuring only the genuine device owner authorizes the payment.


Tier 3: Native Android Subsystems (Java Layer)

1. Verix Call Guardian Service (VerixCallGuardianService.java)
- What It Does: A persistent Android foreground service running with special-use and microphone types.
- Why We Used It: Modern Android versions (Android 10 through 15) aggressively kill background processes to save battery, which would disable call screening.
- Key Benefits and Advantages: Keeps the threat listening engine permanently active in the background, ensuring incoming scam calls are caught in under 150ms even if the app was closed hours earlier.

2. Phone Call Receiver (PhoneCallReceiver.java)
- What It Does: A broadcast receiver listening for telephony state changes (Ringing, Offhook, Idle).
- Why We Used It: Catches incoming GSM calls the exact millisecond the cellular radio registers an incoming ring.
- Key Benefits and Advantages: Extracts and normalizes the caller number before the user picks up the phone, allowing threat evaluation before conversation begins.

3. Call Notification Dispatcher (CallNotificationDispatcher.java)
- What It Does: Configures and manages high-importance Android notification channels.
- Why We Used It: Standard notifications can be silenced by Android Do Not Disturb or hidden behind active phone dialer apps.
- Key Benefits and Advantages: Uses High Importance, public lockscreen visibility, and full-screen intent flags to guarantee Heads-Up alert banners pop directly over incoming call screens.


Tier 4: Backend Microservices and Cloud AI Engines

1. Node.js and Express.js
- What It Does: Hosts the RESTful API microservices layer on cloud servers.
- Why We Used It: Non-blocking asynchronous I/O allows thousands of concurrent screening queries and transaction risk checks with minimal latency.
- Key Benefits and Advantages: Lightweight, rapid deployment cycle, and seamless JSON data exchange with native mobile clients and cloud databases.

2. Groq Cloud AI (LLaMA 3.3 70B)
- What It Does: Natural Language Processing engine evaluating transaction descriptions, remarks, and call transcripts.
- Why We Used It: Standard cloud GPU endpoints suffer from 3 to 5 second cold-start and inference latencies, making in-call threat detection too slow.
- Key Benefits and Advantages: Groq Language Processing Units (LPUs) deliver sub-400ms inference, allowing real-time detection of social engineering tactics (Digital Arrest, fake customs, fake police, electricity cutoffs) during an active conversation.

3. Groq Cloud Whisper Large v3
- What It Does: Automatic speech-to-text transcription engine.
- Why We Used It: Conversational speech in India mixes English, Hindi, regional words, and diverse accents.
- Key Benefits and Advantages: High transcription accuracy across Indian accents, converting 30-second audio windows into text in under 300 milliseconds.


Tier 5: Database and Storage Layer

1. Supabase Cloud (PostgreSQL 15)
- What It Does: Primary relational cloud database storing threat intelligence registries, transaction logs, and live dispute tickets.
- Why We Used It: PostgreSQL provides ACID compliance, structured data integrity, and built-in row-level security for sensitive financial telemetry.
- Key Benefits and Advantages: Real-time change subscriptions allow the Bank Admin Portal to receive incoming dispute appeals instantly without continuous server polling.

2. In-Memory Threat Intel Cache
- What It Does: A localized memory dictionary of verified high-risk scam phone numbers and blacklisted UPI VPAs from I4C and Sanchar Saathi registries.
- Why We Used It: Network round-trips to cloud databases during a ringing call can introduce lag if the user's mobile data connection is weak.
- Key Benefits and Advantages: Enables instant sub-150ms caller screening directly in RAM, guaranteeing that warnings display while the phone is actively ringing.

3. Firebase Authentication
- What It Does: Handles user authentication, security tokens, and officer session management.
- Why We Used It: Enterprise-grade identity management with built-in token verification.
- Key Benefits and Advantages: Ensures that only authorized bank compliance personnel can access the dispute review desk and issue payment whitelisting clearances.

4. Browser Local Storage
- What It Does: Client-side storage on the mobile device for user preferences and offline configuration.
- Why We Used It: Eliminates unnecessary server queries for static user settings.
- Key Benefits and Advantages: Persists multi-language selection, custom transaction safe limits, and local audit logs offline.


Tier 6: Hosting and Infrastructure Layer

1. Render Web Services
- What It Does: Cloud container platform hosting the primary Node.js backend.
- Why We Used It: Dockerized automated deployments with zero infrastructure overhead.
- Key Benefits and Advantages: Automatic SSL provisioning, continuous integration, and seamless vertical scaling.

2. Render Static Web and Keep-Alive Daemon (verix-bank.onrender.com)
- What It Does: Hosts the Bank Admin Command Center with a 10-minute automated background ping daemon.
- Why We Used It: Free/standard cloud instances enter sleep mode after periods of inactivity, causing 30-second cold start delays.
- Key Benefits and Advantages: The keep-alive daemon keeps the backend continuously warm, guaranteeing instant response times during live hackathon demonstrations and bank reviews.


3. CORE MODULES AND REAL-TIME DETECTION MECHANICS

1. In-Call GSM Screening and Normalization Pipeline
- Mechanism: Phone numbers are stripped of country codes, leading zeros, and formatting characters to isolate the core 10 digits before matching against local and cloud threat databases.
- Strategic Advantage: Prevents scammers from bypassing filters by switching between +91, 0, or spaced formatting.
- User Flow: When a call rings from a flagged extortion number (such as +91 94775 30475), the user receives an immediate vibrating Heads-Up banner warning them of suspected cyber extortion. If the caller is clean, a safe trust badge is displayed.

2. In-Call Speech Sentinel (30-Second Audio Window)
- Mechanism: Captures a user-triggered 30-second audio window during an active call, transcribes it via Whisper v3, and classifies extortion intent using LLaMA 3.3.
- Strategic Advantage: Exposes psychological extortion in real time even if the scammer is calling from a brand new, unflagged SIM card.
- User Flow: The user taps Scan Speech in their notification bar, and within seconds receives a breakdown of detected threat vectors (such as fake CBI arrest threats or urgent fee demands).

3. Pre-Transaction Multi-Pillar Risk Scoring Engine
- Mechanism: Calculates a composite threat score from 0 to 100 based on five weighted signals:
  * Payee Blacklist Registry Status (45% Weight)
  * Active Call Coercion Telemetry (25% Weight)
  * Device and Remote Control Anomalies (20% Weight)
  * Amount and Velocity Overage (15% Weight)
  * NLP Payment Description Remarks (20% Weight)
- Strategic Advantage: Correlates multiple circumstantial threat indicators that traditional bank fraud rules miss (such as paying while on an active phone call).

4. Dynamic Action Tiers and 5-Minute Cooldown
- Safe Transfers (Score 0 to 39): Green indicator allowing direct 1-tap handoff to Google Pay, PhonePe, or Paytm.
- Caution Transfers (Score 40 to 69): Yellow indicator requiring mandatory biometric fingerprint confirmation.
- Critical Blocked Transfers (Score 70 to 100): Red indicator that locks the transfer and initiates a mandatory 5-minute cooling-off period.
- Strategic Advantage: Disrupts the panic-induced psychological urgency created by scammers, giving victims time to regain composure.

5. Closed-Loop Bank Admin Clearance Desk
- Mechanism: Blocked users can submit a false-positive review ticket (such as VRX-REV-499356) that appears live on the bank compliance console for one-click approval.
- Strategic Advantage: Solves the friction of false positives, giving legitimate businesses an immediate clearance pathway without compromising security.


4. SECURITY, PRIVACY AND LEGAL COMPLIANCE

1. Digital Personal Data Protection Act (DPDP Act 2023) Compliance:
- Zero Call Recording Storage: Conversational audio is never recorded continuously or saved to disk. 30-second audio windows are processed exclusively in volatile RAM memory buffers and immediately destroyed after threat classification.
- Transparent Consent: Users explicitly grant microphone and notification permissions during onboarding.

2. RBI and NPCI Guidelines Adherence:
- Zero Credential Storage: VERIX does not store UPI PINs, debit card credentials, or bank passwords.
- Standard Intent Protocols: Payment execution is handed off directly to authorized PSP applications via standard Android upi://pay intent protocols.


5. CURRENT SYSTEM LIMITATIONS AND PRACTICAL REALITY CHECKS

1. Cellular Voice Channel Sandboxing: Android security policies prevent third-party apps from recording two-way cellular audio directly; speech capture relies on the device microphone buffer during speakerphone or active in-call use.
2. Cloud Dependency for Deep AI: Conversational AI classification requires active internet connectivity. When offline, VERIX falls back to deterministic regex and local threat seeds.
3. Simulated Production Banking Switch: Direct integration with production NPCI switches is legally restricted to licensed banks; the prototype handoff uses standard Android UPI payment intent protocols.
4. OEM Background Task Killing: Highly aggressive battery-saving modes on certain Android OEM skins can suspend background services unless battery optimization exemptions are granted by the user.


6. TOP 10 HIGH-IMPACT ROADMAP IMPROVEMENTS AND FUTURE BENEFITS

1. On-Device Quantized AI Models: Deploy lightweight TinyLlama and Whisper models locally via ONNX Runtime to enable 100% offline threat inference with zero cloud latency.
2. Direct NPCI Sandbox Integration: Partner with scheduled commercial banks to connect directly to the NPCI Fraud and Dispute Management switch for automated account freezes.
3. SIM Swap and IMSI Change Detection: Integrate telecom carrier APIs to flag recent SIM re-issuance, preventing account takeover attacks before transactions occur.
4. STIR/SHAKEN Cryptographic Caller Verification: Implement telecom-level cryptographic signatures to eliminate caller ID spoofing at the network layer.
5. Accessibility Auto-Inspection: Use Android Accessibility Services to automatically read recipient UPI handles inside third-party payment apps and display protection overlays without manual user input.
6. Decentralized Threat Mesh: Enable crowdsourced reporting of suspect accounts backed by multi-signature consensus to prevent malicious false-flagging.
7. Deepfake and Synthetic Voice Detection: Incorporate audio spectral artifact analysis to identify AI-cloned voices used in family emergency extortion schemes.
8. Indic Regional Language Models: Expand speech recognition using specialized Indian language models (Bhashini / AI4Bharat) for Hindi, Tamil, Telugu, Bengali, Marathi, and Odia dialects.
9. Smart Escrow Delay Mechanism: Introduce an automated 15-minute holding escrow for borderline-risk transfers that auto-reverses if a cybercrime complaint is logged.
10. Bidirectional I4C Live Sync: Establish continuous data streaming pipelines with the Ministry of Home Affairs National Cybercrime Portal for automated registry synchronization.
