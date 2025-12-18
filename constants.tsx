import { 
  Briefcase, 
  Users, 
  ShieldCheck, 
  BrainCircuit, 
  Link as LinkIcon, 
  FileText, 
  Clock, 
  Lock, 
  LayoutDashboard, 
  MessageSquare, 
  FileCheck,
  Globe,
  Smartphone,
  Server
} from 'lucide-react';
import { ContentDictionary } from './types';

export const CONTENT: Record<'en' | 'ar', ContentDictionary> = {
  en: {
    nav: {
      home: "Home",
      features: "Capabilities",
      insights: "Insights Hub",
      caseStudies: "Success Stories",
      contact: "Contact",
      portal: "Client Login",
      demo: "Request Demo",
      freeTrial: "Start Free Trial",
      pricing: "Pricing"
    },
    hero: {
      title: "The Future of Legal Practice in the UAE",
      subtitle: "LEXCORA is the premier ERP suite designed for high-net-worth law firms. Seamlessly integrate productivity, governance, and client experience.",
      ctaPrimary: "Start Free Trial",
      ctaCallback: "Request a Callback",
      ctaSecondary: "Explore Features",
      trustBadge: "Trusted by Dubai's Leading Legal Consultants"
    },
    features: {
      sectionTitle: "Enterprise-Grade Capabilities",
      productivity: {
        title: "Productivity & Case Management",
        subtitle: "Streamline operations with fully expandable modules.",
        items: [
          { title: "Smart Case Files", description: "Cross-referencing, linking, and deep file attachments.", icon: Briefcase },
          { title: "Judicial Deadlines", description: "Automated countdown timers for appeals and objections.", icon: Clock },
          { title: "Confidential Vault", description: "Restricted access sections for sensitive case materials.", icon: Lock }
        ]
      },
      client: {
        title: "Client Experience & Collaboration",
        subtitle: "A dedicated portal to elevate your client relationships.",
        items: [
          { title: "Client Portal", description: "Secure access for requests, uploads, and viewing case status.", icon: Users },
          { title: "Financial Transparency", description: "Real-time balance tracking and expense summaries.", icon: LayoutDashboard },
          { title: "Appointment Booking", description: "Integrated scheduling for seamless consultations.", icon: Clock }
        ]
      },
      governance: {
        title: "Governance, Control & Security",
        subtitle: "Uncompromising security and audit trails.",
        items: [
          { title: "Approvals Center", description: "Centralized control for invoices, custody, and expenses.", icon: FileCheck },
          { title: "Audit Logs", description: "Timestamped tracking of every system action by user.", icon: ShieldCheck },
          { title: "Enterprise Security", description: "Private backend database with remote secure access.", icon: Server }
        ]
      },
      intelligence: {
        title: "Intelligence & Customization",
        subtitle: "Tailored for the modern legal professional.",
        items: [
          { title: "Legal Text Assistant", description: "Retrieve verified UAE statutory material instantly.", icon: BrainCircuit },
          { title: "Customizable UI", description: "12 themes with tailored fonts and color palettes.", icon: LayoutDashboard }
        ]
      },
      integration: {
        title: "Seamless Integrations",
        subtitle: "Connect with the tools you use daily.",
        items: [
          { title: "Communication", description: "WhatsApp Business & Microsoft 365 integration.", icon: MessageSquare },
          { title: "Workspace", description: "Full Google Workspace connectivity.", icon: LinkIcon }
        ]
      }
    },
    testimonials: {
      title: "Trusted by Industry Leaders",
      subtitle: "See why top-tier UAE firms are switching to LEXCORA.",
      items: [
        {
          quote: "The automated judicial deadline tracking has saved us countless hours. LEXCORA is a true game-changer for UAE litigation workflows.",
          author: "Sarah Al-Mansoori",
          role: "Senior Partner",
          firm: "Al-Mansoori & Associates"
        },
        {
          quote: "Finally, an ERP that handles bilingual documentation flawlessly. The Arabic interface is just as robust as the English one.",
          author: "James Sterling",
          role: "Managing Director",
          firm: "Sterling Legal Consultancy"
        },
        {
          quote: "Security is paramount for our high-net-worth clients. The private vault features give us the peace of mind we need.",
          author: "Dr. Ahmed Khalil",
          role: "Head of Dispute Resolution",
          firm: "Khalil International Law"
        }
      ]
    },
    caseStudies: {
      pageTitle: "Proven Results in the UAE Legal Sector",
      pageSubtitle: "Discover how leading firms are transforming their operations, efficiency, and client satisfaction with LEXCORA.",
      ctaTitle: "Ready to achieve similar results?",
      ctaButton: "Schedule Your Consultation",
      items: [
        {
          id: "1",
          firmName: "Al-Futtaim & Partners Legal Group",
          title: "Automating Litigation Workflows for 30% Efficiency Gains",
          challenge: "The firm struggled with manual deadline tracking across 500+ active litigation cases, leading to near-misses on appeal filings and excessive administrative overtime.",
          solution: "Implemented LEXCORA's Productivity Module with automated judicial deadline timers and smart case file linking.",
          metrics: [
            { value: "30%", label: "Reduction in Admin Time" },
            { value: "0", label: "Missed Deadlines in 12 Months" },
            { value: "100%", label: "Digitization of Case Files" }
          ],
          image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600"
        },
        {
          id: "2",
          firmName: "Dubai Arbitration Counsel (DAC)",
          title: "Enhancing Client Transparency & Billing Accuracy",
          challenge: "High-net-worth clients demanded real-time updates on case expenses and balances, which the previous legacy system could not provide accurately.",
          solution: "Deployed the LEXCORA Client Portal and Financial Transparency module to give clients secure, real-time access to their financial standing.",
          metrics: [
            { value: "50%", label: "Faster Billing Cycle" },
            { value: "99.9%", label: "Invoice Accuracy" },
            { value: "4.8/5", label: "Client Satisfaction Score" }
          ],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600"
        },
        {
          id: "3",
          firmName: "Sharjah Boutique Law",
          title: "Securing Sensitive Family Law Data",
          challenge: "Handling sensitive family law cases required a level of data security and access control that off-the-shelf software could not offer.",
          solution: "Utilized LEXCORA's Governance module with Granular Permissions and the Confidential Vault for restricted files.",
          metrics: [
            { value: "100%", label: "Audit Trail Coverage" },
            { value: "24/7", label: "Secure Remote Access" },
            { value: "ISO", label: "Compliant Security Standards" }
          ],
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600"
        }
      ]
    },
    pricing: {
      pageTitle: "Transparent Pricing for Modern Firms",
      pageSubtitle: "Choose the package that fits your practice scale and needs.",
      toggleMonthly: "Monthly",
      toggleAnnual: "Annually",
      saveLabel: "Get 2 Months Free",
      tiers: {
        starter: {
          name: "Starter Package",
          stars: 2,
          priceMonthly: "199",
          priceAnnually: "1,990",
          periodLabel: "AED / user",
          minUsers: "Minimum: 2 Users",
          features: [
            "Case and File Management (Unlimited)",
            "Client and Opponent Management",
            "Session Tracking + Automatic Reminders",
            "Consultation and Meeting Management",
            "Basic Invoicing + Basic Financial Reports",
            "Bilingual Interface (Arabic/English)",
            "Basic Permissions System",
            "20 GB Cloud Storage/user",
            "Technical Support (Email)",
            "Remote Training Session"
          ],
          cta: "Start Free Trial"
        },
        professional: {
          name: "Professional Package",
          stars: 3,
          priceMonthly: "349",
          priceAnnually: "3,490",
          periodLabel: "AED / user",
          minUsers: "Minimum: 4 Users",
          highlight: true,
          features: [
            "All Features from STARTER",
            "AI-powered intelligent legal assistant (200 queries)",
            "Advanced chart of accounts + reports",
            "Full HR management",
            "Asset management",
            "Team productivity monitoring",
            "Advanced permissions system",
            "100 GB storage/user",
            "Basic API (M365 / Google Workspace)",
            "Technical support (WhatsApp + email)",
            "Two remote training sessions"
          ],
          cta: "Go Professional"
        },
        enterprise: {
          name: "Enterprise Package",
          stars: 4,
          priceMonthly: "500+",
          priceAnnually: "Custom",
          periodLabel: "Starting from AED / user",
          minUsers: "Minimum: 20 Users",
          features: [
            "All Features from PROFESSIONAL",
            "Unlimited AI-powered intelligent assistant",
            "Unlimited storage",
            "Full API (WhatsApp Business + Google + M365)",
            "Custom reports on demand",
            "White-label (Logo & Identity)",
            "Customized Account Manager",
            "24/7 Technical Support",
            "Alerts for Assets/Contracts",
            "On-site Training (4 Sessions)",
            "Comprehensive Activity Log Tracking"
          ],
          cta: "Contact Sales"
        }
      },
      discounts: {
        title: "Volume Discounts",
        subtitle: "Scale your firm and save more.",
        tableHeadUser: "Number of Users",
        tableHeadDiscount: "Discount Percentage",
        items: [
          { range: "5-10 Users", discount: "5%" },
          { range: "11-20 Users", discount: "10%" },
          { range: "21-50 Users", discount: "15%" },
          { range: "51+ Users", discount: "20%" }
        ],
        note: "Note: Discounts apply to the monthly or annual price only."
      },
      referral: {
        title: "Referral Program",
        item1: "Get one free month for each law firm you refer that joins the system.",
        item2: "The referred firm receives a 15% discount on its first month."
      }
    },
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: October 2023",
      intro: "At LEXCORA, we are committed to protecting the privacy and security of our clients' data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our ERP software and website. We operate in strict compliance with the UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data.",
      sections: [
        {
          heading: "1. Information We Collect",
          content: [
            "Personal Identification Information: Name, email address, phone number, and professional credentials when you register for an account.",
            "Case Data: Information related to legal cases, clients, and documents uploaded to the system. This data is processed solely for the purpose of providing the service.",
            "Usage Data: Information on how the service is accessed and used, including IP addresses, browser types, and log data."
          ]
        },
        {
          heading: "2. How We Use Your Information",
          content: [
            "To provide and maintain the LEXCORA ERP service.",
            "To manage your account, billing, and subscription.",
            "To notify you about changes to our service or judicial deadlines.",
            "To provide customer support and technical assistance.",
            "To detect, prevent, and address technical issues."
          ]
        },
        {
          heading: "3. Data Sovereignty & Security",
          content: [
            "We prioritize UAE data sovereignty. All critical client data is stored on secure, encrypted servers located within the United Arab Emirates or jurisdictions deemed to have adequate protection.",
            "We employ enterprise-grade encryption (AES-256) for data at rest and in transit.",
            "Access to your data is strictly limited to authorized personnel and is logged via our audit trail system."
          ]
        },
        {
          heading: "4. Disclosure of Information",
          content: [
            "We do not sell your personal data to third parties.",
            "We may disclose your personal data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency in the UAE).",
            "We may share data with trusted third-party service providers (e.g., payment processors) solely for the purpose of operational functionality."
          ]
        },
        {
          heading: "5. Your Data Rights",
          content: [
            "Right to Access: You have the right to request copies of your personal data.",
            "Right to Rectification: You have the right to request correction of inaccurate information.",
            "Right to Erasure: You have the right to request deletion of your personal data, subject to legal retention requirements."
          ]
        }
      ],
      contact: {
        heading: "Contact Us",
        text: "If you have any questions about this Privacy Policy, please contact us:",
        email: "rased@almstkshf.com"
      }
    },
    trial: {
      pageTitle: "Start Your 14-Day Free Trial",
      steps: {
        1: "Personal Details",
        2: "Firm Information",
        3: "Confirmation"
      },
      form: {
        fullName: "Full Name",
        workEmail: "Work Email Address",
        phone: "Mobile Number",
        firmName: "Law Firm Name",
        firmSize: "Firm Size",
        sizes: ["Solo Practitioner", "2-10 Attorneys", "11-50 Attorneys", "50+ Attorneys"],
        next: "Next Step",
        back: "Back",
        submit: "Create Account"
      },
      success: {
        title: "Welcome to LEXCORA",
        subtitle: "Your account has been successfully created. We have sent a verification email to your inbox.",
        checklistTitle: "Your Onboarding Checklist",
        checklist: [
          "Verify your email address",
          "Complete your firm profile",
          "Invite team members",
          "Schedule onboarding call"
        ],
        dashboardButton: "Go to Dashboard"
      },
      testimonial: {
        quote: "The signup process was seamless. We had our entire case database migrated and running within 48 hours.",
        author: "Tariq Al-Hashimi, Managing Partner"
      }
    },
    insights: {
      title: "Legal Insights & Market Commentary",
      subtitle: "Stay ahead with updates from the UAE legal landscape.",
      demoTitle: "Experience Our Smart Assistant",
      demoPlaceholder: "Ask about UAE Labour Law (e.g., 'What is the gratuity calculation?')",
      demoButton: "Ask Assistant",
      articles: [
        { id: "7", category: "Regulatory Update", title: "Navigating the 2024 Amendments to the UAE Civil Procedure Law", date: "Nov 05, 2023", image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=800" },
        { id: "8", category: "Practice Management", title: "Cybersecurity Essentials for Dubai Law Firms", date: "Oct 28, 2023", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
        { id: "1", category: "Regulatory Update", title: "New UAE Corporate Tax Implications for Law Firms", date: "Oct 12, 2023", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" },
        { id: "4", category: "Market Analysis", title: "The Rise of Boutique Litigation Firms in Dubai", date: "Aug 30, 2023", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
        { id: "5", category: "Regulatory Update", title: "AML Compliance: New Standards for 2024", date: "Aug 12, 2023", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
        { id: "6", category: "Legal Tech", title: "The Future of Bilingual Legal Contracts", date: "Jul 22, 2023", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    insightsPage: {
      pageTitle: "LEXCORA Intelligence Hub",
      pageSubtitle: "Expert analysis, regulatory updates, and practice management strategies for the modern UAE legal professional.",
      searchPlaceholder: "Search articles, topics, or keywords...",
      categories: ["All", "Regulatory", "Practice Management", "Legal Tech", "Market Analysis"],
      readMore: "Read Full Article",
      backButton: "Back to Insights Hub",
      items: [
        {
          id: "7",
          category: "Regulatory",
          title: "Navigating the 2024 Amendments to the UAE Civil Procedure Law",
          excerpt: "A detailed look at the recent changes intended to expedite litigation and modernize courtroom procedures.",
          author: "Omar Al-Futtaim",
          date: "Nov 05, 2023",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=800",
          tags: ["Litigation", "Civil Law", "Courts"],
          content: [
            "The UAE's legal landscape is constantly evolving, and the recent amendments to the Civil Procedure Law are a testament to the country's commitment to judicial efficiency. The changes primarily focus on streamlining case management and reducing the backlog in courts.",
            "One of the most significant changes is the expansion of the Case Management Office's (CMO) powers. The CMO can now attempt mediation and settlement before a case even reaches a judge. This pre-trial phase is mandatory for certain types of commercial disputes, aiming to resolve conflicts amicably and swiftly.",
            "Additionally, the threshold for final judgments by the Court of First Instance has been raised. This means fewer cases will be eligible for appeal, thereby reducing the caseload of appellate courts and providing faster certainty for litigants in smaller claims.",
            "Service of process has also been modernized. Electronic notification via email or SMS is now considered the primary method of service, replacing the traditional and often delayed physical courier method. Law firms must ensure their client contact details are meticulously updated in the Case Management System to avoid missed notifications."
          ]
        },
        {
          id: "8",
          category: "Practice Management",
          title: "Cybersecurity Essentials for Dubai Law Firms",
          excerpt: "With cyberattacks on legal practices rising by 40%, safeguarding client privilege requires more than just a password.",
          author: "Tech Desk",
          date: "Oct 28, 2023",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
          tags: ["Security", "Data", "Risk"],
          content: [
            "Law firms are treasure troves of sensitive data—intellectual property, merger details, and private client information. This makes them prime targets for cybercriminals. In Dubai, where high-value transactions are the norm, the risk profile is even higher.",
            "The first line of defense is the human firewall. Phishing attacks remain the most common entry point. Regular training for staff on how to identify suspicious emails is non-negotiable. A single click on a malicious link can compromise an entire firm's network.",
            "Technologically, encryption is king. Data should be encrypted both at rest (on your servers) and in transit (when being emailed). Using secure client portals, like the one offered by LEXCORA, is far safer than sending attachments via standard email.",
            "Finally, have an Incident Response Plan. If a breach occurs, knowing exactly who to call and how to contain the threat can mean the difference between a minor disruption and a catastrophic reputational loss."
          ]
        },
        {
          id: "9",
          category: "Regulatory",
          title: "Enforcement of Foreign Judgments: A 2024 Update",
          excerpt: "Analyzing the reciprocity principle and the new streamlined procedures for enforcing international awards in UAE courts.",
          author: "Layla Hakim",
          date: "Oct 15, 2023",
          readTime: "9 min read",
          image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800",
          tags: ["International Law", "Enforcement", "Courts"],
          content: [
            "For decades, enforcing a foreign judgment in UAE courts was a notoriously difficult process, often involving a re-examination of the merits of the case. However, recent legal reforms and circulars from the Ministry of Justice have signaled a pro-enforcement stance.",
            "The key development is the relaxation of the reciprocity requirement. Previously, UAE courts required proof that the foreign jurisdiction would enforce a UAE judgment. Now, the burden of proof has shifted, and courts are more willing to accept reciprocity based on international conventions.",
            "Furthermore, the execution judge now has the authority to issue immediate enforcement orders for judgments from jurisdictions with specific treaties, such as the UK (following the recent memorandum). This bypasses the lengthy Court of First Instance ratification process.",
            "Practitioners must still be wary of the public policy defense, which remains a common ground for challenging enforcement. Ensuring that the foreign judgment does not contravene Sharia principles or UAE public order is essential for success."
          ]
        },
        {
          id: "1",
          category: "Regulatory",
          title: "Comprehensive Guide to UAE Corporate Tax for Law Firms",
          excerpt: "Understanding the implications of the 9% corporate tax rate on legal practices and how to structure your firm for compliance.",
          author: "Dr. Hassan Al-Ali",
          date: "Oct 12, 2023",
          readTime: "8 min read",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
          tags: ["Tax Law", "Compliance", "Finance"],
          content: [
            "The implementation of the Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses marks a significant shift in the UAE's economic landscape. For law firms, specifically those operating as partnerships or sole establishments, understanding the nuances of this new regime is critical for maintaining profitability and compliance.",
            "Effective from financial years starting on or after June 1, 2023, the 9% Corporate Tax applies to taxable income exceeding AED 375,000. This threshold is strategically set to support startups and small businesses, but most established legal practices will find themselves within the taxable bracket. The first step for any firm is to conduct a comprehensive financial audit to segregate taxable and non-taxable income streams.",
            "Crucially, the law provides for certain exemptions and reliefs, particularly for free zone entities that meet the 'Qualifying Income' criteria. However, many mainland law firms will need to restructure their expense reporting. Deductible expenses, such as employee salaries, rent, and software subscriptions (like LEXCORA), play a vital role in calculating the final taxable income. Proper documentation of these expenses is no longer just best practice; it is a regulatory necessity.",
            "Furthermore, partners in law firms must distinguish between their profit shares and salaries. The Federal Tax Authority (FTA) has issued specific guidelines on how partner remuneration is treated. Failure to adhere to these guidelines could result in penalties or the disallowance of deductions.",
            "We recommend that all law firms appoint a dedicated tax officer or engage with external consultants to navigate this transition. Integrating an ERP system that automatically categorizes expenses according to tax codes can save hundreds of administrative hours and reduce the risk of human error during tax filing season."
          ]
        },
        {
          id: "2",
          category: "Practice Management",
          title: "Digitizing Case Files: Moving Beyond Paper",
          excerpt: "A step-by-step framework for transitioning your firm's archives to a secure, cloud-based ERP system without disrupting ongoing litigation.",
          author: "Sarah Jenkins",
          date: "Sep 28, 2023",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
          tags: ["Digital Transformation", "Efficiency", "Operations"],
          content: [
            "The era of the physical file room is drawing to a close. With the UAE Ministry of Justice accelerating its adoption of smart court systems and remote hearings, law firms that rely on paper archives are finding themselves at a competitive disadvantage. Digitization is no longer a luxury; it is a prerequisite for modern legal practice.",
            "However, the prospect of digitizing thousands of archived case files can be daunting. The key to a successful digital transformation lies in a phased approach. Attempting to scan everything at once often leads to operational paralysis. Instead, we propose a 'day-forward' strategy combined with on-demand back-scanning.",
            "Phase 1: The 'Day-Forward' Policy. Establish a firm-wide rule that all new cases opened after a specific date are born digital. Correspondence, pleadings, and evidence are uploaded directly to the Case Management System (CMS). Physical copies are only kept if legally mandated for original submission.",
            "Phase 2: Active Case Migration. Identify all currently active files. These should be prioritized for scanning. A dedicated team or external vendor should be tasked with digitizing these files over a set period, ensuring that metadata (case numbers, client names, dates) is accurately indexed.",
            "Phase 3: Archive Management. For closed cases, digitize only on demand. If a file is requested for reference, it gets scanned. Over time, this organic process reduces the physical footprint without a massive upfront investment.",
            "Security is paramount during this transition. Cloud-based ERPs like LEXCORA offer bank-grade encryption and granular access controls, ensuring that client confidentiality is maintained—often more securely than in a physical cabinet accessible to anyone with a key."
          ]
        },
        {
          id: "3",
          category: "Legal Tech",
          title: "AI in Arbitration: Risks, Rewards, and Regulations",
          excerpt: "Exploring how Artificial Intelligence is being used in dispute resolution within the DIFC and ADGM courts.",
          author: "Karim Fayed",
          date: "Sep 15, 2023",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
          tags: ["AI", "Arbitration", "Future Tech"],
          content: [
            "Artificial Intelligence is making waves in international arbitration, and the UAE's leading financial centers, DIFC and ADGM, are at the forefront of this adoption. From predictive analytics to automated document review, AI is reshaping how disputes are resolved.",
            "One of the most immediate applications is in e-discovery. In complex commercial arbitrations involving terabytes of data, AI algorithms can sift through documents to identify relevant evidence with a speed and accuracy that human teams cannot match. This significantly reduces the time and cost associated with the disclosure phase.",
            "Predictive justice is another emerging frontier. Tools that analyze past judgments to predict the likelihood of success are becoming increasingly sophisticated. While these tools do not replace legal judgment, they provide valuable data points for strategy formulation and settlement negotiations.",
            "However, the rise of AI in arbitration raises significant regulatory and ethical questions. The 'black box' problem—where the reasoning behind an AI's conclusion is opaque—poses a challenge to the principles of natural justice and the right to a reasoned award. Furthermore, issues of bias in training data must be addressed to ensure fairness.",
            "The DIFC Courts have established a Digital Economy Court to specifically handle disputes arising from emerging technologies. As the regulatory framework evolves, arbitrators and counsel must become technologically literate to effectively advocate for their clients in this new digital arena."
          ]
        },
        {
          id: "4",
          category: "Market Analysis",
          title: "The Rise of Boutique Litigation Firms in Dubai",
          excerpt: "Why specialized boutique firms are gaining market share over large generalist practices in the post-pandemic era.",
          author: "Market Watch Team",
          date: "Aug 30, 2023",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
          tags: ["Trends", "Growth", "Strategy"],
          content: [
             "The Dubai legal market is witnessing a structural shift. For decades, large international firms and massive local generalist practices dominated the landscape. However, post-pandemic data suggests a significant migration of high-value litigation work to specialized boutique firms.",
             "Several factors are driving this trend. First is the demand for specialized expertise. In an increasingly complex regulatory environment, clients prefer deep knowledge in specific sectors (e.g., construction disputes, maritime law, or white-collar crime) over the 'one-stop-shop' model.",
             "Second is conflict of interest. Large firms often face conflict issues due to their vast institutional client bases, preventing them from acting against banks or major developers. Boutique firms, with their leaner client lists, are often conflict-free and can aggressively pursue claims against major entities.",
             "Third is cost-efficiency and agility. Without the overheads of a global network, boutique firms can offer more competitive fee structures and personalized partner attention. Technology plays a crucial role here; cloud-based ERPs allow a 10-lawyer firm to operate with the same efficiency and infrastructure as a 100-lawyer practice.",
             "For aspiring legal entrepreneurs, this represents a golden era. The market is rewarding agility, specialization, and technological adoption. The firms that succeed will be those that combine deep subject matter expertise with modern, efficient practice management."
          ]
        },
        {
          id: "5",
          category: "Regulatory",
          title: "AML Compliance: New Standards for 2024",
          excerpt: "An overview of the updated Anti-Money Laundering regulations enforced by the Ministry of Justice and what they mean for your client onboarding.",
          author: "Fatima Al-Sayed",
          date: "Aug 12, 2023",
          readTime: "10 min read",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
          tags: ["AML", "Compliance", "Risk"],
          content: [
             "The UAE's commitment to combatting financial crime has led to a rigorous overhaul of Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) regulations. For lawyers, who are classified as Designated Non-Financial Businesses and Professions (DNFBPs), the compliance burden has increased significantly.",
             "The new 2024 standards mandate a risk-based approach to client onboarding. It is no longer sufficient to simply copy a passport. Law firms must conduct enhanced due diligence (EDD) on clients from high-risk jurisdictions or those identified as Politically Exposed Persons (PEPs).",
             "Furthermore, the reporting mechanism for Suspicious Activity Reports (SARs) has been streamlined through the goAML portal. Failure to report suspicious transactions can lead to severe criminal penalties and license revocation. The Ministry of Justice has intensified its inspection campaigns to ensure adherence.",
             "Law firms must implement robust internal controls. This includes appointing a compliance officer, conducting regular staff training, and maintaining auditable records of all due diligence activities. Technology is the first line of defense; modern legal ERPs include integrated AML screening tools that automatically check client names against global sanctions lists.",
             "Compliance should not be viewed merely as a tick-box exercise but as a cornerstone of the firm's reputation. In a global financial hub like Dubai, demonstrating the highest standards of integrity is a competitive advantage."
          ]
        },
        {
          id: "6",
          category: "Legal Tech",
          title: "The Future of Bilingual Legal Contracts",
          excerpt: "How automated document generation is solving the Arabic-English dual language requirement in UAE courts.",
          author: "James Wilson",
          date: "Jul 22, 2023",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
          tags: ["Translation", "Automation", "Contracts"],
          content: [
             "In the UAE, the duality of language is a fundamental aspect of legal practice. While international business is often conducted in English, the official language of the courts is Arabic. This creates a perpetual bottleneck: the need to translate lengthy contracts and pleadings accurately and quickly.",
             "Historically, this has been a manual, expensive, and error-prone process. However, the next generation of legal tech is changing the game. Automated document generation tools, integrated into ERP systems, can now produce dual-column bilingual contracts instantly based on pre-approved templates.",
             "These systems ensure consistency in terminology. Legal terms of art are mapped one-to-one, reducing the risk of a translation discrepancy altering the legal meaning of a clause. This is particularly vital in dispute resolution clauses where ambiguity can be fatal.",
             "Beyond templates, advances in Neural Machine Translation (NMT) specifically trained on legal corpora are allowing for first-draft translations of bespoke documents that are 80-90% accurate. This shifts the lawyer's role from translator to reviewer, significantly increasing leverage and profitability.",
             "Firms that master this bilingual automation will dominate the cross-border transactional market, offering faster turnaround times and lower costs to clients who operate in this multicultural jurisdiction."
          ]
        }
      ]
    },
    chatbot: {
      title: "LEXCORA Assistant",
      placeholder: "Type your question...",
      welcome: "Hello! I am the LEXCORA AI assistant. How can I help you navigate our services today?",
      send: "Send",
      disclaimer: "AI responses are for informational purposes only and do not constitute legal advice."
    },
    footer: {
      about: "LEXCORA by ALMSTKSHF Co. The definitive ERP for UAE legal excellence.",
      contact: "Get in Touch",
      address: "Level 16, Alkhatem Building, Marya Island, Abu Dhabi, UAE",
      privacy: "Privacy Policy",
      compliance: "Compliance & Data Protection",
      rights: "© 2025 almstkshf co. All Rights Reserved.",
      newsletter: {
        title: "Stay Informed",
        description: "Subscribe to our newsletter for the latest legal tech insights and product updates.",
        placeholder: "Enter your work email",
        button: "Subscribe",
        success: "Thank you for subscribing!"
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      features: "القدرات",
      insights: "مركز الرؤى",
      caseStudies: "قصص النجاح",
      contact: "اتصل بنا",
      portal: "دخول العملاء",
      demo: "اطلب عرضاً",
      freeTrial: "تجربة مجانية",
      pricing: "الأسعار"
    },
    hero: {
      title: "مستقبل المحاماة في الإمارات",
      subtitle: "ليكسكورا هو نظام تخطيط موارد المؤسسات الأول المصمم لمكاتب المحاماة الكبرى. دمج سلس للإنتاجية، والحوكمة، وتجربة العملاء.",
      ctaPrimary: "ابدأ تجربة مجانية",
      ctaCallback: "اطلب مكالمة",
      ctaSecondary: "استكشف الميزات",
      trustBadge: "موثوق به من كبار المستشارين القانونيين في دبي"
    },
    features: {
      sectionTitle: "قدرات على مستوى المؤسسات",
      productivity: {
        title: "الإنتاجية وإدارة القضايا",
        subtitle: "بسيط العمليات مع وحدات قابلة للتوسيع بالكامل.",
        items: [
          { title: "ملفات قضايا ذكية", description: "ربط مرجعي، وربط الملفات، ومرفقات عميقة.", icon: Briefcase },
          { title: "المواعيد القضائية", description: "مؤقتات عد تنازلي آلية للاستئناف والاعتراضات.", icon: Clock },
          { title: "خزنة سرية", description: "أقسام مقيدة الوصول لمواد القضايا الحساسة.", icon: Lock }
        ]
      },
      client: {
        title: "تجربة العملاء والتعاون",
        subtitle: "بوابة مخصصة للارتقاء بعلاقات عملائك.",
        items: [
          { title: "بوابة العملاء", description: "وصول آمن للطلبات، والتحميلات، وعرض حالة القضية.", icon: Users },
          { title: "الشفافية المالية", description: "تتبع الرصيد وملخصات المصاريف في الوقت الفعلي.", icon: LayoutDashboard },
          { title: "حجز المواعيد", description: "جدولة متكاملة لاستشارات سلسة.", icon: Clock }
        ]
      },
      governance: {
        title: "الحوكمة، والتحكم والأمان",
        subtitle: "أمان لا هوادة فيه وسجلات تدقيق.",
        items: [
          { title: "مركز الموافقات", description: "تحكم مركزي للفواتير، والعهد، والمصاريف.", icon: FileCheck },
          { title: "سجلات التدقيق", description: "تتبع زمني لكل إجراء في النظام حسب المستخدم.", icon: ShieldCheck },
          { title: "أمان المؤسسات", description: "قاعدة بيانات خلفية خاصة مع وصول آمن عن بعد.", icon: Server }
        ]
      },
      intelligence: {
        title: "الذكاء والتخصيص",
        subtitle: "مصممة للمحامي العصري.",
        items: [
          { title: "مساعد النصوص القانونية", description: "استرجاع المواد القانونية الإماراتية الموثقة فوراً.", icon: BrainCircuit },
          { title: "واجهة مستخدم قابلة للتخصيص", description: "١٢ سمة مع خطوط ولوحات ألوان مخصصة.", icon: LayoutDashboard }
        ]
      },
      integration: {
        title: "تكامل سلس",
        subtitle: "اتصل بالأدوات التي تستخدمها يومياً.",
        items: [
          { title: "الاتصالات", description: "تكامل واتساب للأعمال ومايكروسوفت ٣٦٥.", icon: MessageSquare },
          { title: "مساحة العمل", description: "اتصال كامل مع جوجل وورك سبيس.", icon: LinkIcon }
        ]
      }
    },
    testimonials: {
      title: "موثوق به من قادة الصناعة",
      subtitle: "شاهد لماذا تنتقل أفضل الشركات الإماراتية إلى ليكسكورا.",
      items: [
        {
          quote: "لقد وفر علينا تتبع المواعيد القضائية الآلي ساعات لا تحصى. ليكسكورا هو تغيير حقيقي لقواعد اللعبة في إجراءات التقاضي في الإمارات.",
          author: "سارة المنصوري",
          role: "شريك أول",
          firm: "المنصوري وشركاه"
        },
        {
          quote: "أخيراً، نظام تخطيط موارد يتعامل مع الوثائق ثنائية اللغة ببراعة. الواجهة العربية قوية تماماً مثل الإنجليزية.",
          author: "جيمس ستيرلينغ",
          role: "المدير العام",
          firm: "ستيرلينغ للاستشارات القانونية"
        },
        {
          quote: "الأمان أمر بالغ الأهمية لعملائنا من ذوي الثروات العالية. تمنحنا ميزات الخزنة الخاصة راحة البال التي نحتاجها.",
          author: "د. أحمد خليل",
          role: "رئيس تسوية المنازعات",
          firm: "خليل الدولية للمحاماة"
        }
      ]
    },
    caseStudies: {
      pageTitle: "نتائج مثبتة في القطاع القانوني الإماراتي",
      pageSubtitle: "اكتشف كيف تقوم الشركات الرائدة بتحويل عملياتها وكفاءتها ورضا عملائها مع ليكسكورا.",
      ctaTitle: "مستعد لتحقيق نتائج مماثلة؟",
      ctaButton: "احجز استشارتك",
      items: [
        {
          id: "1",
          firmName: "مجموعة الفطيم وشركاه القانونية",
          title: "أتمتة سير عمل التقاضي لتحقيق مكاسب كفاءة بنسبة ٣٠٪",
          challenge: "عانت الشركة من تتبع المواعيد النهائية يدوياً عبر أكثر من ٥٠٠ قضية نشطة، مما أدى إلى تفويت مواعيد الاستئناف والعمل الإضافي المفرط.",
          solution: "تم تطبيق وحدة الإنتاجية في ليكسكورا مع مؤقتات المواعيد القضائية الآلية وربط ملفات القضايا الذكي.",
          metrics: [
            { value: "٣٠٪", label: "تخفيض في الوقت الإداري" },
            { value: "٠", label: "مواعيد فائتة في ١٢ شهراً" },
            { value: "١٠٠٪", label: "رقمنة ملفات القضايا" }
          ],
          image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600"
        },
        {
          id: "2",
          firmName: "مجلس التحكيم بدبي",
          title: "تعزيز شفافية العملاء ودقة الفواتير",
          challenge: "طالب العملاء من ذوي الثروات العالية بتحديثات فورية حول نفقات القضايا والأرصدة، وهو ما لم يتمكن النظام القديم من توفيره بدقة.",
          solution: "نشر بوابة عملاء ليكسكورا ووحدة الشفافية المالية لمنح العملاء وصولاً آمناً وفورياً لوضعهم المالي.",
          metrics: [
            { value: "٥٠٪", label: "دورة فواتير أسرع" },
            { value: "٩٩.٩٪", label: "دقة الفواتير" },
            { value: "٤.٨/٥", label: "درجة رضا العملاء" }
          ],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600"
        },
        {
          id: "3",
          firmName: "الشارقة بوتيك للمحاماة",
          title: "تأمين بيانات قضايا الأسرة الحساسة",
          challenge: "تطلب التعامل مع قضايا الأسرة الحساسة مستوى من أمان البيانات والتحكم في الوصول لم تتمكن البرامج الجاهزة من تقديمه.",
          solution: "استخدام وحدة الحوكمة في ليكسكورا مع أذونات دقيقة والخزنة السرية للملفات المقيدة.",
          metrics: [
            { value: "١٠٠٪", label: "تغطية سجل التدقيق" },
            { value: "٢٤/٧", label: "وصول آمن عن بعد" },
            { value: "ISO", label: "معايير أمان متوافقة" }
          ],
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600"
        }
      ]
    },
    pricing: {
      pageTitle: "أسعار شفافة للشركات الحديثة",
      pageSubtitle: "اختر الباقة التي تناسب حجم واحتياجات ممارستك.",
      toggleMonthly: "شهرياً",
      toggleAnnual: "سنوياً",
      saveLabel: "احصل على شهرين مجاناً",
      tiers: {
        starter: {
          name: "باقة البداية",
          stars: 2,
          priceMonthly: "١٩٩",
          priceAnnually: "١,٩٩٠",
          periodLabel: "درهم / مستخدم",
          minUsers: "الحد الأدنى: ٢ مستخدمين",
          features: [
            "إدارة القضايا والملفات (غير محدود)",
            "إدارة العملاء والخصوم",
            "تتبع الجلسات + تذكيرات تلقائية",
            "إدارة الاستشارات والاجتماعات",
            "فواتير أساسية + تقارير مالية أساسية",
            "واجهة ثنائية اللغة (عربي/إنجليزي)",
            "نظام أذونات أساسي",
            "٢٠ جيجابايت تخزين سحابي/مستخدم",
            "دعم فني (بريد إلكتروني)",
            "جلسة تدريب عن بعد"
          ],
          cta: "ابدأ تجربة مجانية"
        },
        professional: {
          name: "الباقة الاحترافية",
          stars: 3,
          priceMonthly: "٣٤٩",
          priceAnnually: "٣,٤٩٠",
          periodLabel: "درهم / مستخدم",
          minUsers: "الحد الأدنى: ٤ مستخدمين",
          highlight: true,
          features: [
            "كل ميزات الباقة الأساسية",
            "مساعد قانوني ذكي (٢٠٠ استعلام)",
            "دليل حسابات متقدم + تقارير",
            "إدارة موارد بشرية كاملة",
            "إدارة الأصول",
            "مراقبة إنتاجية الفريق",
            "نظام أذونات متقدم",
            "١٠٠ جيجابايت تخزين/مستخدم",
            "API أساسي (M365 / Google Workspace)",
            "دعم فني (واتساب + بريد إلكتروني)",
            "جلستي تدريب عن بعد"
          ],
          cta: "اختر الاحترافية"
        },
        enterprise: {
          name: "باقة المؤسسات",
          stars: 4,
          priceMonthly: "٥٠٠+",
          priceAnnually: "مخصص",
          periodLabel: "يبدأ من درهم / مستخدم",
          minUsers: "الحد الأدنى: ٢٠ مستخدم",
          features: [
            "كل ميزات الباقة الاحترافية",
            "مساعد ذكي غير محدود",
            "تخزين غير محدود",
            "API كامل (WhatsApp Business + Google + M365)",
            "تقارير مخصصة عند الطلب",
            "هوية خاصة (الشعار والهوية)",
            "مدير حساب مخصص",
            "دعم فني ٢٤/٧",
            "تنبيهات للأصول/العقود",
            "تدريب في الموقع (٤ جلسات)",
            "تتبع سجل نشاط شامل"
          ],
          cta: "اتصل بالمبيعات"
        }
      },
      discounts: {
        title: "خصومات الحجم",
        subtitle: "وسع شركتك ووفر أكثر.",
        tableHeadUser: "عدد المستخدمين",
        tableHeadDiscount: "نسبة الخصم",
        items: [
          { range: "٥-١٠ مستخدمين", discount: "٥٪" },
          { range: "١١-٢٠ مستخدم", discount: "١٠٪" },
          { range: "٢١-٥٠ مستخدم", discount: "١٥٪" },
          { range: "٥١+ مستخدم", discount: "٢٠٪" }
        ],
        note: "ملاحظة: تطبق الخصومات على السعر الشهري أو السنوي فقط."
      },
      referral: {
        title: "برنامج الإحالة",
        item1: "احصل على شهر مجاني لكل مكتب محاماة تحيله وينضم للنظام.",
        item2: "يحصل المكتب المحال على خصم ١٥٪ في شهره الأول."
      }
    },
    privacyPolicy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: أكتوبر ٢٠٢٣",
      intro: "في ليكسكورا، نلتزم بحماية خصوصية وأمان بيانات عملائنا. تحدد سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن وحماية معلوماتك عند استخدام برنامج ERP وموقعنا الإلكتروني. نعمل بامتثال صارم للمرسوم بقانون اتحادي رقم ٤٥ لسنة ٢٠٢١ بشأن حماية البيانات الشخصية.",
      sections: [
        {
          heading: "١. المعلومات التي نجمعها",
          content: [
            "معلومات التعريف الشخصية: الاسم وعنوان البريد الإلكتروني ورقم الهاتف وبيانات الاعتماد المهنية عند التسجيل للحصول على حساب.",
            "بيانات القضايا: المعلومات المتعلقة بالقضايا القانونية والعملاء والمستندات التي تم تحميلها على النظام. تتم معالجة هذه البيانات فقط لغرض تقديم الخدمة.",
            "بيانات الاستخدام: معلومات حول كيفية الوصول إلى الخدمة واستخدامها، بما في ذلك عناوين IP وأنواع المتصفحات وبيانات السجل."
          ]
        },
        {
          heading: "٢. كيف نستخدم معلوماتك",
          content: [
            "لتقديم وصيانة خدمة ليكسكورا ERP.",
            "لإدارة حسابك والفواتير والاشتراك.",
            "لإعلامك بالتغييرات في خدمتنا أو المواعيد القضائية.",
            "لتقديم دعم العملاء والمساعدة الفنية.",
            "للكشف عن المشكلات الفنية ومنعها ومعالجتها."
          ]
        },
        {
          heading: "٣. سيادة البيانات والأمان",
          content: [
            "نحن نعطي الأولوية لسيادة البيانات في الإمارات. يتم تخزين جميع بيانات العملاء الهامة على خوادم آمنة ومشفرة تقع داخل الإمارات العربية المتحدة أو ولايات قضائية تعتبر ذات حماية كافية.",
            "نستخدم تشفيراً على مستوى المؤسسات (AES-256) للبيانات في حالة السكون وأثناء النقل.",
            "يقتصر الوصول إلى بياناتك بشكل صارم على الموظفين المصرح لهم ويتم تسجيله عبر نظام سجل التدقيق الخاص بنا."
          ]
        },
        {
          heading: "٤. الكشف عن المعلومات",
          content: [
            "نحن لا نبيع بياناتك الشخصية لأطراف ثالثة.",
            "قد نكشف عن بياناتك الشخصية إذا كان ذلك مطلوباً بموجب القانون أو استجابة لطلبات صالحة من السلطات العامة (مثل محكمة أو وكالة حكومية في الإمارات).",
            "قد نشارك البيانات مع مزودي خدمة طرف ثالث موثوق بهم (مثل معالجي الدفع) فقط لغرض الوظائف التشغيلية."
          ]
        },
        {
          heading: "٥. حقوق بياناتك",
          content: [
            "حق الوصول: لديك الحق في طلب نسخ من بياناتك الشخصية.",
            "حق التصحيح: لديك الحق في طلب تصحيح المعلومات غير الدقيقة.",
            "حق المسح: لديك الحق في طلب حذف بياناتك الشخصية، مع مراعاة متطلبات الاحتفاظ القانونية."
          ]
        }
      ],
      contact: {
        heading: "اتصل بنا",
        text: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:",
        email: "rased@almstkshf.com"
      }
    },
    trial: {
      pageTitle: "ابدأ تجربتك المجانية لمدة ١٤ يوماً",
      steps: {
        1: "التفاصيل الشخصية",
        2: "معلومات الشركة",
        3: "التأكيد"
      },
      form: {
        fullName: "الاسم الكامل",
        workEmail: "عنوان بريد العمل",
        phone: "رقم الهاتف المتحرك",
        firmName: "اسم مكتب المحاماة",
        firmSize: "حجم المكتب",
        sizes: ["ممارس فردي", "٢-١٠ محامين", "١١-٥٠ محامياً", "٥٠+ محامياً"],
        next: "الخطوة التالية",
        back: "رجوع",
        submit: "إنشاء حساب"
      },
      success: {
        title: "مرحباً بك في ليكسكورا",
        subtitle: "تم إنشاء حسابك بنجاح. لقد أرسلنا بريداً إلكترونياً للتحقق إلى صندوق الوارد الخاص بك.",
        checklistTitle: "قائمة التحقق الخاصة بك",
        checklist: [
          "تحقق من عنوان بريدك الإلكتروني",
          "أكمل ملف تعريف الشركة",
          "قم بدعوة أعضاء الفريق",
          "احجز مكالمة تأهيل"
        ],
        dashboardButton: "الذهاب إلى لوحة التحكم"
      },
      testimonial: {
        quote: "كانت عملية التسجيل سلسة. تم ترحيل قاعدة بيانات القضايا بالكامل وتشغيلها في غضون ٤٨ ساعة.",
        author: "طارق الهاشمي، شريك إداري"
      }
    },
    insights: {
      title: "رؤى قانونية وتعليقات السوق",
      subtitle: "ابق في المقدمة مع تحديثات المشهد القانوني في الإمارات.",
      demoTitle: "جرب مساعدنا الذكي",
      demoPlaceholder: "اسأل عن قانون العمل الإماراتي (مثلاً: 'ما هو حساب مكافأة نهاية الخدمة؟')",
      demoButton: "اسأل المساعد",
      articles: [
        { id: "7", category: "تحديث تنظيمي", title: "تصفح تعديلات قانون الإجراءات المدنية الإماراتي لعام ٢٠٢٤", date: "٥ نوفمبر ٢٠٢٣", image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=800" },
        { id: "8", category: "إدارة الممارسة", title: "أساسيات الأمن السيبراني لمكاتب المحاماة في دبي", date: "٢٨ أكتوبر ٢٠٢٣", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
        { id: "9", category: "تحديث تنظيمي", title: "إنفاذ الأحكام الأجنبية: تحديث ٢٠٢٤", date: "١٥ أكتوبر ٢٠٢٣", image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800" },
        { id: "4", category: "تحليل السوق", title: "صعود شركات التقاضي المتخصصة في دبي", date: "٣٠ أغسطس ٢٠٢٣", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
        { id: "5", category: "تنظيمي", title: "الامتثال لمكافحة غسل الأموال: معايير جديدة لعام ٢٠٢٤", date: "١٢ أغسطس ٢٠٢٣", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
        { id: "6", category: "التكنولوجيا القانونية", title: "مستقبل العقود القانونية ثنائية اللغة", date: "٢٢ يوليو ٢٠٢٣", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    insightsPage: {
      pageTitle: "مركز ذكاء ليكسكورا",
      pageSubtitle: "تحليل الخبراء، والتحديثات التنظيمية، واستراتيجيات إدارة الممارسة للمحامي الإماراتي الحديث.",
      searchPlaceholder: "ابحث عن مقالات، مواضيع، أو كلمات مفتاحية...",
      categories: ["الكل", "تنظيمي", "إدارة الممارسة", "التكنولوجيا القانونية", "تحليل السوق"],
      readMore: "اقرأ المقال كاملاً",
      backButton: "العودة لمركز الرؤى",
      items: [
         {
          id: "7",
          category: "تنظيمي",
          title: "تصفح تعديلات قانون الإجراءات المدنية الإماراتي لعام ٢٠٢٤",
          excerpt: "نظرة تفصيلية على التغييرات الأخيرة التي تهدف إلى تسريع التقاضي وتحديث إجراءات قاعة المحكمة.",
          author: "عمر الفطيم",
          date: "٥ نوفمبر ٢٠٢٣",
          readTime: "٧ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80&w=800",
          tags: ["التقاضي", "القانون المدني", "المحاكم"],
          content: [
            "يتطور المشهد القانوني في دولة الإمارات العربية المتحدة باستمرار، وتعد التعديلات الأخيرة على قانون الإجراءات المدنية دليلاً على التزام الدولة بالكفاءة القضائية. تركز التغييرات بشكل أساسي على تبسيط إدارة القضايا وتقليل التراكم في المحاكم.",
            "أحد أهم التغييرات هو توسيع صلاحيات مكتب إدارة الدعوى (CMO). يمكن للمكتب الآن محاولة الوساطة والتسوية قبل وصول القضية إلى القاضي. هذه المرحلة قبل المحاكمة إلزامية لأنواع معينة من النزاعات التجارية، بهدف حل النزاعات ودياً وبسرعة.",
            "بالإضافة إلى ذلك، تم رفع الحد الأدنى للأحكام النهائية الصادرة عن المحكمة الابتدائية. وهذا يعني أن عدداً أقل من القضايا سيكون مؤهلاً للاستئناف، مما يقلل من عبء القضايا على محاكم الاستئناف ويوفر يقيناً أسرع للمتقاضين في المطالبات الصغيرة.",
            "تم تحديث إجراءات الإعلان أيضاً. يعتبر الإخطار الإلكتروني عبر البريد الإلكتروني أو الرسائل النصية القصيرة الآن الطريقة الأساسية للإعلان، بدلاً من الطريقة التقليدية التي غالباً ما تتأخر عبر البريد. يجب على مكاتب المحاماة التأكد من تحديث تفاصيل الاتصال بعملائهم بدقة في نظام إدارة القضايا لتجنب تفويت الإشعارات."
          ]
        },
        {
          id: "8",
          category: "إدارة الممارسة",
          title: "أساسيات الأمن السيبراني لمكاتب المحاماة في دبي",
          excerpt: "مع ارتفاع الهجمات السيبرانية على الممارسات القانونية بنسبة ٤٠٪، تتطلب حماية امتياز العميل أكثر من مجرد كلمة مرور.",
          author: "المكتب التقني",
          date: "٢٨ أكتوبر ٢٠٢٣",
          readTime: "٥ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
          tags: ["الأمن", "البيانات", "المخاطر"],
          content: [
            "تعد مكاتب المحاماة كنوزاً من البيانات الحساسة - الملكية الفكرية، وتفاصيل الاندماج، ومعلومات العملاء الخاصة. وهذا يجعلها أهدافاً رئيسية لمجرمي الإنترنت. في دبي، حيث المعاملات عالية القيمة هي القاعدة، فإن ملف المخاطر أعلى.",
            "خط الدفاع الأول هو جدار الحماية البشري. تظل هجمات التصيد الاحتيالي هي نقطة الدخول الأكثر شيوعاً. التدريب المنتظم للموظفين حول كيفية تحديد رسائل البريد الإلكتروني المشبوهة أمر غير قابل للتفاوض. يمكن للنقر فوق رابط ضار واحد أن يعرض شبكة الشركة بأكملها للخطر.",
            "تكنولوجياً، التشفير هو الملك. يجب تشفير البيانات سواء كانت في حالة سكون (على خوادمك) أو أثناء النقل (عند إرسالها بالبريد الإلكتروني). يعد استخدام بوابات العملاء الآمنة، مثل تلك التي تقدمها LEXCORA، أكثر أماناً بكثير من إرسال المرفقات عبر البريد الإلكتروني القياسي.",
            "أخيراً، يجب أن يكون لديك خطة استجابة للحوادث. إذا حدث خرق، فإن معرفة من تتصل به بالضبط وكيفية احتواء التهديد يمكن أن يعني الفرق بين اضطراب طفيف وخسارة كارثية للسمعة."
          ]
        },
        {
          id: "9",
          category: "تنظيمي",
          title: "إنفاذ الأحكام الأجنبية: تحديث ٢٠٢٤",
          excerpt: "تحليل مبدأ المعاملة بالمثل والإجراءات المبسطة الجديدة لإنفاذ القرارات الدولية في محاكم الإمارات.",
          author: "ليلى حكيم",
          date: "١٥ أكتوبر ٢٠٢٣",
          readTime: "٩ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800",
          tags: ["القانون الدولي", "الإنفاذ", "المحاكم"],
          content: [
            "لعقود من الزمان، كان إنفاذ حكم أجنبي في محاكم الإمارات عملية صعبة للغاية، غالباً ما تتضمن إعادة فحص موضوع القضية. ومع ذلك، أشارت الإصلاحات القانونية الأخيرة والتعاميم الصادرة عن وزارة العدل إلى موقف مؤيد للإنفاذ.",
            "التطور الرئيسي هو تخفيف متطلبات المعاملة بالمثل. سابقاً، كانت محاكم الإمارات تطلب إثبات أن الولاية القضائية الأجنبية ستنفذ حكماً إماراتياً. الآن، تحول عبء الإثبات، وأصبحت المحاكم أكثر استعداداً لقبول المعاملة بالمثل بناءً على الاتفاقيات الدولية.",
            "علاوة على ذلك، يتمتع قاضي التنفيذ الآن بسلطة إصدار أوامر إنفاذ فورية للأحكام الصادرة من ولايات قضائية لها معاهدات محددة، مثل المملكة المتحدة (بعد المذكرة الأخيرة). هذا يتجاوز عملية التصديق الطويلة في المحكمة الابتدائية.",
            "لا يزال يتعين على الممارسين الحذر من دفاع النظام العام، الذي يظل سبباً شائعاً للطعن في الإنفاذ. التأكد من أن الحكم الأجنبي لا يتعارض مع مبادئ الشريعة أو النظام العام الإماراتي ضروري للنجاح."
          ]
        },
        {
          id: "4",
          category: "تحليل السوق",
          title: "صعود شركات التقاضي المتخصصة في دبي",
          excerpt: "لماذا تكتسب الشركات المتخصصة حصة سوقية أكبر من الممارسات العامة الكبيرة في مرحلة ما بعد الجائحة.",
          author: "فريق مراقبة السوق",
          date: "٣٠ أغسطس ٢٠٢٣",
          readTime: "٧ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
          tags: ["اتجاهات", "نمو", "استراتيجية"],
          content: [
             "يشهد سوق دبي القانوني تحولاً هيكلياً. لعقود من الزمان، هيمنت الشركات الدولية الكبيرة والممارسات العامة المحلية الضخمة على المشهد. ومع ذلك، تشير بيانات ما بعد الجائحة إلى هجرة كبيرة لأعمال التقاضي عالية القيمة إلى شركات متخصصة.",
             "هناك عدة عوامل تقود هذا الاتجاه. الأول هو الطلب على الخبرة المتخصصة. في بيئة تنظيمية متزايدة التعقيد، يفضل العملاء المعرفة العميقة في قطاعات محددة (مثل نزاعات البناء، أو القانون البحري، أو الجرائم المالية) على نموذج 'المتجر الشامل'.",
             "الثاني هو تضارب المصالح. غالباً ما تواجه الشركات الكبيرة مشاكل تضارب بسبب قواعد عملائها المؤسسية الضخمة، مما يمنعها من العمل ضد البنوك أو كبار المطورين. غالباً ما تكون الشركات المتخصصة، بقوائم عملائها الأصغر، خالية من التضارب ويمكنها متابعة المطالبات بقوة ضد الكيانات الكبرى.",
             "الثالث هو فعالية التكلفة والمرونة. بدون النفقات العامة لشبكة عالمية، يمكن للشركات المتخصصة تقديم هياكل رسوم أكثر تنافسية واهتمام شخصي من الشركاء. تلعب التكنولوجيا دوراً حاسماً هنا؛ تسمح أنظمة تخطيط موارد المؤسسات القائمة على السحابة لشركة مكونة من ١٠ محامين بالعمل بنفس الكفاءة والبنية التحتية لممارسة تضم ١٠٠ محام.",
             "بالنسبة لرواد الأعمال القانونيين الطموحين، يمثل هذا عصراً ذهبياً. يكافئ السوق المرونة والتخصص وتبني التكنولوجيا. الشركات التي ستنجح هي تلك التي تجمع بين الخبرة العميقة في الموضوع وإدارة الممارسة الحديثة والفعالة."
          ]
        },
        {
          id: "5",
          category: "تنظيمي",
          title: "الامتثال لمكافحة غسل الأموال: معايير جديدة لعام ٢٠٢٤",
          excerpt: "نظرة عامة على لوائح مكافحة غسل الأموال المحدثة التي تفرضها وزارة العدل وما تعنيه لإجراءات قبول العملاء.",
          author: "فاطمة السيد",
          date: "١٢ أغسطس ٢٠٢٣",
          readTime: "١٠ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
          tags: ["مكافحة غسل الأموال", "الامتثال", "المخاطر"],
          content: [
             "أدى التزام الإمارات العربية المتحدة بمكافحة الجرائم المالية إلى إصلاح صارم للوائح مكافحة غسل الأموال (AML) وتمويل الإرهاب (CTF). بالنسبة للمحامين، الذين تم تصنيفهم كأعمال ومهن غير مالية محددة (DNFBPs)، زاد عبء الامتثال بشكل كبير.",
             "تفرض معايير ٢٠٢٤ الجديدة نهجاً قائماً على المخاطر لقبول العملاء. لم يعد كافياً مجرد نسخ جواز سفر. يجب على مكاتب المحاماة إجراء العناية الواجبة المعززة (EDD) على العملاء من الولايات القضائية عالية المخاطر أو أولئك الذين تم تحديدهم كأشخاص معرضين سياسياً (PEPs).",
             "علاوة على ذلك، تم تبسيط آلية الإبلاغ عن تقارير الأنشطة المشبوهة (SARs) من خلال بوابة goAML. يمكن أن يؤدي الفشل في الإبلاغ عن المعاملات المشبوهة إلى عقوبات جنائية شديدة وإلغاء الترخيص. كثفت وزارة العدل حملاتها التفتيشية لضمان الالتزام.",
             "يجب على مكاتب المحاماة تنفيذ ضوابط داخلية قوية. ويشمل ذلك تعيين مسؤول امتثال، وإجراء تدريب منتظم للموظفين، والحفاظ على سجلات قابلة للتدقيق لجميع أنشطة العناية الواجبة. التكنولوجيا هي خط الدفاع الأول؛ تتضمن أنظمة تخطيط موارد المؤسسات القانونية الحديثة أدوات فحص مكافحة غسل الأموال المتكاملة التي تتحقق تلقائياً من أسماء العملاء مقابل قوائم العقوبات العالمية.",
             "لا ينبغي النظر إلى الامتثال مجرد تمرين لوضع علامة في المربع، بل كحجر زاوية لسمعة المكتب. في مركز مالي عالمي مثل دبي، يعد إظهار أعلى معايير النزاهة ميزة تنافسية."
          ]
        },
        {
          id: "6",
          category: "التكنولوجيا القانونية",
          title: "مستقبل العقود القانونية ثنائية اللغة",
          excerpt: "كيف يحل إنشاء المستندات الآلي متطلبات اللغة المزدوجة العربية والإنجليزية في محاكم الإمارات.",
          author: "جيمس ويلسون",
          date: "٢٢ يوليو ٢٠٢٣",
          readTime: "٦ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
          tags: ["الترجمة", "الأتمتة", "العقود"],
          content: [
             "في الإمارات العربية المتحدة، تعد ازدواجية اللغة جانباً أساسياً من الممارسة القانونية. في حين تتم الأعمال الدولية غالباً باللغة الإنجليزية، فإن اللغة الرسمية للمحاكم هي العربية. يخلق هذا عنق زجاجة دائم: الحاجة إلى ترجمة العقود والمرافعات الطويلة بدقة وبسرعة.",
             "تاريخياً، كانت هذه عملية يدوية ومكلفة وعرضة للخطأ. ومع ذلك، فإن الجيل القادم من التكنولوجيا القانونية يغير اللعبة. يمكن لأدوات إنشاء المستندات الآلية، المدمجة في أنظمة تخطيط موارد المؤسسات، الآن إنتاج عقود ثنائية اللغة ذات عمودين فوراً بناءً على قوالب معتمدة مسبقاً.",
             "تضمن هذه الأنظمة الاتساق في المصطلحات. يتم تعيين المصطلحات القانونية الفنية واحداً لواحد، مما يقلل من خطر تباين الترجمة الذي يغير المعنى القانوني لبند ما. هذا أمر حيوي بشكل خاص في بنود حل النزاعات حيث يمكن أن يكون الغموض قاتلاً.",
             "إلى جانب القوالب، يسمح التقدم في الترجمة الآلية العصبية (NMT) المدربة خصيصاً على المتون القانونية بترجمات المسودة الأولى للمستندات المخصصة بدقة ٨٠-٩٠٪. وهذا يحول دور المحامي من مترجم إلى مراجع، مما يزيد بشكل كبير من الرافعة المالية والربحية.",
             "الشركات التي تتقن هذه الأتمتة ثنائية اللغة ستهيمن على سوق المعاملات عبر الحدود، وتقدم أوقات استجابة أسرع وتكاليف أقل للعملاء الذين يعملون في هذا الاختصاص القضائي متعدد الثقافات."
          ]
        }
      ]
    },
    chatbot: {
      title: "مساعد ليكسكورا",
      placeholder: "اكتب سؤالك هنا...",
      welcome: "مرحباً! أنا مساعد ليكسكورا الذكي. كيف يمكنني مساعدتك في استكشاف خدماتنا اليوم؟",
      send: "إرسال",
      disclaimer: "ردود الذكاء الاصطناعي هي لأغراض إعلامية فقط ولا تشكل مشورة قانونية."
    },
    footer: {
      about: "ليكسكورا من شركة المستكشف. نظام تخطيط الموارد الأمثل للتميز القانوني في الإمارات.",
      contact: "تواصل معنا",
      address: "الطابق ١٦، مبنى الخاتم، جزيرة المارية، أبوظبي، الإمارات",
      privacy: "سياسة الخصوصية",
      compliance: "الامتثال وحماية البيانات",
      rights: "© ٢٠٢٥ شركة المستكشف. جميع الحقوق محفوظة.",
      newsletter: {
        title: "ابق على اطلاع",
        description: "اشترك في نشرتنا الإخبارية للحصول على أحدث رؤى التكنولوجيا القانونية وتحديثات المنتج.",
        placeholder: "أدخل بريد العمل",
        button: "اشتراك",
        success: "شكراً لاشتراكك!"
      }
    }
  }
};