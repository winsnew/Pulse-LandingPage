"use client"
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Terms and Conditions component using Tailwind CSS for styling
export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg">
      {/* <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />

      <div
        className="fixed left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_290px,#fbfbfb36,#000)]"
        aria-hidden="true"
      /> */}
      {/* Header Section */}
      <section className="mb-8 relative pt-20 overflow-hidden">
        <h1 className="text-4xl sm:text-6xl font-semibold mb-5 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Terms & Conditions</h1>
        <p className="text-gray-500 text-sm font-semibold">Last Revised on: May 2, 2025</p>
        <p className="text-gray-500 mt-2 text-sm">
          The website located at pulsenow.io (the “Site”) is a copyrighted work belonging to PulseNow platform, Inc. (“Company”, “us”, “our”, and “we”). Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="mb-8 relative text-sm">
        <p className="text-gray-500 text-sm font-semibold">
          THESE TERMS OF USE (THESE “TERMS”) SET FORTH THE LEGALLY BINDING TERMS AND CONDITIONS THAT GOVERN YOUR USE OF THE SITE. BY ACCESSING OR USING THE SITE, YOU ARE ACCEPTING THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT), AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT). YOU MAY NOT ACCESS OR USE THE SITE OR ACCEPT THE TERMS IF YOU ARE NOT AT LEAST 18 YEARS OLD. IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF THESE TERMS, DO NOT ACCESS AND/OR USE THE SITE.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          BY JOINING WAITLIST BEFORE OUR PUBLIC LAUNCH, YOU OR YOUR ENTITY IS STILL LEGALLY BINDED TO THIS TERMS THAT FOLLOWS. YOU CAN OPT OUT OF WAITLIST AND REQUEST DATA DELETION BY CONTACTING US AT <a href="mailto:contact@pulsenow.io" className="text-blue-600 hover:underline">contact@pulsenow.io</a>.
        </p>
        <p className="text-gray-500 mt-4 text-smfont-semibold">
          PLEASE BE AWARE THAT SECTION 8.2 CONTAINS PROVISIONS GOVERNING HOW TO RESOLVE DISPUTES BETWEEN YOU AND COMPANY. AMONG OTHER THINGS, SECTION 8.2 INCLUDES AN AGREEMENT TO ARBITRATE WHICH REQUIRES, WITH LIMITED EXCEPTIONS, THAT ALL DISPUTES BETWEEN YOU AND US SHALL BE RESOLVED BY BINDING AND FINAL ARBITRATION. SECTION 8.2 ALSO CONTAINS A CLASS ACTION AND JURY TRIAL WAIVER. PLEASE READ SECTION 8.2 CAREFULLY.
        </p>
        <p className="text-gray-500 mt-4 text-sm font-semibold">
          UNLESS YOU OPT OUT OF THE AGREEMENT TO ARBITRATE WITHIN 30 DAYS: (1) YOU WILL ONLY BE PERMITTED TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION; AND (2) YOU ARE WAIVING YOUR RIGHT TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL.
        </p>
      </section>

      {/* Accounts Section */}
      <section className="mb-8 relative">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">1. Accounts</h2>
        {/* Account Creation Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-2">1.1 Account Creation</h3>
        <p className="text-gray-500 text-sm">
          In order to use certain features of the Site, you must register for an account (“Account”) and provide certain information about yourself as prompted by the account registration form. You represent and warrant that: (a) all required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information. You may delete your Account at any time, for any reason, by following the instructions on the Site. Company may suspend or terminate your Account in accordance with Section 7.
        </p>
        {/* Account Responsibilities Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">1.2 Account Responsibilities</h3>
        <p className="text-gray-500 text-sm">
          You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify Company of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
        </p>
      </section>

      {/* Access to the Site Section */}
      <section className="mb-8 relative">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">2. Access to the Site</h2>
        {/* License Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-2">2.1 License</h3>
        <p className="text-gray-500 text-sm">
          Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site solely for your own personal, noncommercial use.
        </p>
        {/* Certain Restrictions Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">2.2 Certain Restrictions</h3>
        <p className="text-gray-500 text-sm">
          The rights granted to you in these Terms are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site, whether in whole or in part, or any content displayed on the Site; (b) you shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website, product, or service; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means. Unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site (or on any content displayed on the Site) must be retained on all copies thereof.
        </p>
        {/* Modification Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">2.3 Modification</h3>
        <p className="text-gray-500 text-sm">
          Company reserves the right, at any time, to modify, suspend, or discontinue the Site (in whole or in part) with or without notice to you. You agree that Company will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Site or any part thereof.
        </p>
        {/* No Support or Maintenance Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">2.4 No Support or Maintenance</h3>
        <p className="text-gray-500 text-sm">
          You acknowledge and agree that Company will have no obligation to provide you with any support or maintenance in connection with the Site.
        </p>
        {/* Ownership Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">2.5 Ownership</h3>
        <p className="text-gray-500 text-sm">
          You acknowledge that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Neither these Terms (nor your access to the Site) transfers to you or any third party any rights, title or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms. There are no implied licenses granted under these Terms.
        </p>
        {/* Feedback Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">2.6 Feedback</h3>
        <p className="text-gray-500 text-sm">
          If you provide Company with any feedback or suggestions regarding the Site (“Feedback”), you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. Company will treat any Feedback you provide to Company as non-confidential and non-proprietary. You agree that you will not submit to Company any information or ideas that you consider to be confidential or proprietary.
        </p>
      </section>

      {/* Indemnification Section */}
      <section className="mb-8 relative">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">3. Indemnification</h2>
        <p className="text-gray-500 text-sm">
          You agree to indemnify and hold Company (and its officers, employees, and agents) harmless, including costs and attorneys’ fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Site, (b) your violation of these Terms or (c) your violation of applicable laws or regulations. Company reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of Company. Company will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.
        </p>
      </section>

      {/* Third-Party Links & Ads; Other Users Section */}
      <section className="mb-8 relative">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">4. Third-Party Links & Ads; Other Users</h2>
        {/* Third-Party Links & Ads Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-2">4.1 Third-Party Links & Ads</h3>
        <p className="text-gray-500 text-sm">
          The Site may contain links to third-party websites and services, and/or display advertisements for third parties (collectively, “Third-Party Links & Ads”). Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads. Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads. You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third-Party Links & Ads.
        </p>
        {/* Other Users Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">4.2 Other Users</h3>
        <p className="text-gray-500 text-sm">
          Your interactions with other Site users are solely between you and such users. You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions. If there is a dispute between you and any Site user, we are under no obligation to become involved.
        </p>
        {/* Release Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">4.3 Release</h3>
        <p className="text-gray-500 text-sm">
          You hereby release and forever discharge Company (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site (including any interactions with, or act or omission of, other Site users or any Third-Party Links & Ads). IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.”
        </p>
      </section>

      {/* Disclaimers Section */}
      <section className="mb-8 relative">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">5. Disclaimers</h2>
        <p className="text-gray-500 text-sm">
          THE SITE IS PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS, AND COMPANY (AND OUR SUPPLIERS) EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. WE (AND OUR SUPPLIERS) MAKE NO WARRANTY THAT THE SITE WILL MEET YOUR REQUIREMENTS, WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE. IF APPLICABLE LAW REQUIRES ANY WARRANTIES WITH RESPECT TO THE SITE, ALL SUCH WARRANTIES ARE LIMITED IN DURATION TO 90 DAYS FROM THE DATE OF FIRST USE.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
        </p>
      </section>

      {/* Limitation on Liability Section */}
      <section className="mb-8 relative">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">6. Limitation on Liability</h2>
        <p className="text-gray-500 text-sm">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY (OR OUR SUPPLIERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFITS, LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SITE, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITE IS AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR COMPUTER SYSTEM, OR LOSS OF DATA RESULTING THEREFROM.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THESE TERMS (FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION), WILL AT ALL TIMES BE LIMITED TO A MAXIMUM OF FIFTY US DOLLARS. THE EXISTENCE OF MORE THAN ONE CLAIM WILL NOT ENLARGE THIS LIMIT. YOU AGREE THAT OUR SUPPLIERS WILL HAVE NO LIABILITY OF ANY KIND ARISING FROM OR RELATING TO THESE TERMS.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
        </p>
      </section>

      {/* Term and Termination Section */}
      <section className="mb-8 relative">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">7. Term and Termination</h2>
        <p className="text-gray-500 text-sm">
          Subject to this Section, these Terms will remain in full force and effect while you use the Site. We may suspend or terminate your rights to use the Site (including your Account) at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms. Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately. Company will not have any liability whatsoever to you for any termination of your rights under these Terms, including for termination of your Account. Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2.2 through 2.6 and Sections 3 through 8.
        </p>
      </section>

      {/* General Section */}
      <section className="mb-8 relative">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">8. General</h2>
        {/* Changes Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-2">8.1 Changes</h3>
        <p className="text-gray-500 text-sm">
          These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us (if any), and/or by prominently posting notice of the changes on our Site. You are responsible for providing us with your most current e-mail address. In the event that the last e-mail address that you have provided us is not valid, or for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. Continued use of our Site following notice of such changes shall indicate your acknowledgment of such changes and agreement to be bound by the terms and conditions of such changes.
        </p>
        {/* Dispute Resolution Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2 Dispute Resolution</h3>
        <p className="text-gray-500 text-sm font-semibold">
          Please read the following arbitration agreement in this Section (the “Arbitration Agreement”) carefully. It requires you to arbitrate disputes with Company, its parent companies, subsidiaries, affiliates, successors and assigns and all of their respective officers, directors, employees, agents, and representatives (collectively, the “Company Parties”) and limits the manner in which you can seek relief from the Company Parties.
        </p>
        {/* Applicability of Arbitration Agreement */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(a) Applicability of Arbitration Agreement</h4>
        <p className="text-gray-500 text-sm">
          You agree that any dispute between you and any of the Company Parties relating in any way to the Site, the services offered on the Site (the “Services”) or these Terms will be resolved by binding arbitration, rather than in court, except that (1) you and the Company Parties may assert individualized claims in small claims court if the claims qualify, remain in such court and advance solely on an individual, non-class basis; and (2) you or the Company Parties may seek equitable relief in court for infringement or other misuse of intellectual property rights (such as trademarks, trade dress, domain names, trade secrets, copyrights, and patents). This Arbitration Agreement shall survive the expiration or termination of these Terms and shall apply, without limitation, to all claims that arose or were asserted before you agreed to these Terms (in accordance with the preamble) or any prior version of these Terms. This Arbitration Agreement does not preclude you from bringing issues to the attention of federal, state or local agencies. Such agencies can, if the law allows, seek relief against the Company Parties on your behalf. For purposes of this Arbitration Agreement, “Dispute” will also include disputes that arose or involve facts occurring before the existence of this or any prior versions of the Agreement as well as claims that may arise after the termination of these Terms.
        </p>
        {/* Informal Dispute Resolution */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(b) Informal Dispute Resolution</h4>
        <p className="text-gray-500 text-sm">
          There might be instances when a Dispute arises between you and Company. If that occurs, Company is committed to working with you to reach a reasonable resolution. You and Company agree that good faith informal efforts to resolve Disputes can result in a prompt, low‐cost and mutually beneficial outcome. You and Company therefore agree that before either party commences arbitration against the other (or initiates an action in small claims court if a party so elects), we will personally meet and confer telephonically or via videoconference, in a good faith effort to resolve informally any Dispute covered by this Arbitration Agreement (“Informal Dispute Resolution Conference”). If you are represented by counsel, your counsel may participate in the conference, but you will also participate in the conference.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          The party initiating a Dispute must give notice to the other party in writing of its intent to initiate an Informal Dispute Resolution Conference (“Notice”), which shall occur within 45 days after the other party receives such Notice, unless an extension is mutually agreed upon by the parties. Notice to Company that you intend to initiate an Informal Dispute Resolution Conference should be sent by email to: <a href="mailto:contact@pulsenow.io" className="text-blue-600 hover:underline">contact@pulsenow.io</a>, or by regular mail to 1522 Western Ave, STE 24159, Seattle, Washington 98101. The Notice must include: (1) your name, telephone number, mailing address, e‐mail address associated with your account (if you have one); (2) the name, telephone number, mailing address and e‐mail address of your counsel, if any; and (3) description of your Dispute.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          The Informal Dispute Resolution Conference shall be individualized such that a separate conference must be held each time either party initiates a Dispute, even if the same law firm or group of law firms represents multiple users in similar cases, unless all parties agree; multiple individuals initiating a Dispute cannot participate in the same Informal Dispute Resolution Conference unless all parties agree. In the time between a party receiving the Notice and the Informal Dispute Resolution Conference, nothing in this Arbitration Agreement shall prohibit the parties from engaging in informal communications to resolve the initiating party’s Dispute. Engaging in the Informal Dispute Resolution Conference is a condition precedent and requirement that must be fulfilled before commencing arbitration. The statute of limitations and any filing fee deadlines shall be tolled while the parties engage in the Informal Dispute Resolution Conference process required by this section.
        </p>
        {/* Arbitration Rules and Forum */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(c) Arbitration Rules and Forum</h4>
        <p className="text-gray-500 text-sm">
          These Terms evidence a transaction involving interstate commerce; and notwithstanding any other provision herein with respect to the applicable substantive law, the Federal Arbitration Act, 9 U.S.C. § 1 et seq., will govern the interpretation and enforcement of this Arbitration Agreement and any arbitration proceedings. If the Informal Dispute Resolution Process described above does not resolve satisfactorily within 60 days after receipt of your Notice, you and Company agree that either party shall have the right to finally resolve the Dispute through binding arbitration. The arbitration will be conducted by JAMS, an established alternative dispute resolution provider. Disputes involving claims and counterclaims with an amount in controversy under $250,000, not inclusive of attorneys’ fees and interest, shall be subject to JAMS’ most current version of the Streamlined Arbitration Rules and procedures available at <a href="http://www.jamsadr.com/rules-streamlined-arbitration/" className="text-blue-600 hover:underline">http://www.jamsadr.com/rules-streamlined-arbitration/</a>; all other claims shall be subject to JAMS’s most current version of the Comprehensive Arbitration Rules and Procedures, available at <a href="http://www.jamsadr.com/rules-comprehensive-arbitration/" className="text-blue-600 hover:underline">http://www.jamsadr.com/rules-comprehensive-arbitration/</a>. JAMS’s rules are also available at <a href="http://www.jamsadr.com" className="text-blue-600 hover:underline">www.jamsadr.com</a> or by calling JAMS at 800-352-5267. A party who wishes to initiate arbitration must provide the other party with a request for arbitration (the “Request”). The Request must include: (1) the name, telephone number, mailing address, e‐mail address of the party seeking arbitration and the account username (if applicable) as well as the email address associated with any applicable account; (2) a statement of the legal claims being asserted and the factual bases of those claims; (3) a description of the remedy sought and an accurate, good‐faith calculation of the amount in controversy in United States Dollars; (4) a statement certifying completion of the Informal Dispute Resolution process as described above; and (5) evidence that the requesting party has paid any necessary filing fees in connection with such arbitration.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          If the party requesting arbitration is represented by counsel, the Request shall also include counsel’s name, telephone number, mailing address, and email address. Such counsel must also sign the Request. By signing the Request, counsel certifies to the best of counsel’s knowledge, information, and belief, formed after an inquiry reasonable under the circumstances, that: (1) the Request is not being presented for any improper purpose, such as to harass, cause unnecessary delay, or needlessly increase the cost of dispute resolution; (2) the claims, defenses and other legal contentions are warranted by existing law or by a nonfrivolous argument for extending, modifying, or reversing existing law or for establishing new law; and (3) the factual and damages contentions have evidentiary support or, if specifically so identified, will likely have evidentiary support after a reasonable opportunity for further investigation or discovery. Unless you or Company otherwise agree in writing, the arbitration will be conducted in the county where you reside. Subject to the JAMS Rules, the arbitrator may direct a limited and reasonable exchange of information between the parties, consistent with the expedited nature of the arbitration.
        </p>
        {/* Authority of Arbitrator */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(d) Authority of Arbitrator</h4>
        <p className="text-gray-500 text-sm">
          The arbitrator, and not any federal, state or local court or agency shall have exclusive authority to resolve any dispute related to the interpretation, applicability, enforceability or formation of this Arbitration Agreement including, but not limited to, any claim that all or any part of this Arbitration Agreement is void or voidable. The arbitrator will decide the rights and liabilities, if any, of you and the Company Parties. The arbitration proceeding will not be consolidated with any other matters or joined with any other cases or parties. The arbitrator shall have the authority to grant motions dispositive of all or part of any claim. The arbitrator shall have the authority to award monetary damages and to grant any non-monetary remedy or relief available to an individual under applicable law, the arbitral forum’s rules, and these Terms (including the Arbitration Agreement). The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded. The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon you and the Company Parties.
        </p>
        {/* Waiver of Jury Trial */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(e) Waiver of Jury Trial</h4>
        <p className="text-gray-500 text-sm">
          YOU AND THE COMPANY PARTIES HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY. You and the Company Parties are instead electing that all covered claims and disputes shall be resolved by arbitration under this Arbitration Agreement, except as specified in Section 8.2(a) above. An arbitrator can award on an individual basis the same damages and relief as a court and must follow these Terms as a court would. However, there is no judge or jury in arbitration, and court review of an arbitration award is subject to very limited review.
        </p>
        {/* Waiver of Class or Other Non-Individualized Relief */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(f) Waiver of Class or Other Non-Individualized Relief</h4>
        <p className="text-gray-500 text-sm">
          ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS, ONLY INDIVIDUAL RELIEF IS AVAILABLE, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER. If a decision is issued stating that applicable law precludes enforcement of any of this section’s limitations as to a given claim for relief, then the claim must be severed from the arbitration and brought into the State or Federal Courts located in King County, Washington. All other claims shall be arbitrated.
        </p>
        {/* 30-Day Right to Opt Out */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(g) 30-Day Right to Opt Out</h4>
        <p className="text-gray-500 text-sm">
          You have the right to opt out of the provisions of this Arbitration Agreement by sending written notice of your decision to opt out to: <a href="mailto:contact@pulsenow.io" className="text-blue-600 hover:underline">contact@pulsenow.io</a>, within 30 days after first becoming subject to this Arbitration Agreement. Your notice must include your name and address, your username (if any), the email address you used to set up your account (if you have one), and an unequivocal statement that you want to opt out of this Arbitration Agreement. If you opt out of this Arbitration Agreement, all other parts of these Terms will continue to apply to you. Opting out of this Arbitration Agreement has no effect on any other arbitration agreements that you may currently have, or may enter in the future, with us.
        </p>
        {/* Severability */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(h) Severability</h4>
        <p className="text-gray-500 text-sm">
          Except as provided in Section 8.2(f), if any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Arbitration Agreement shall continue in full force and effect.
        </p>
        {/* Survival of Agreement */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(i) Survival of Agreement</h4>
        <p className="text-gray-500 text-sm">
          This Arbitration Agreement will survive the termination of your relationship with Company.
        </p>
        {/* Modification */}
        <h4 className="text-lg font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.2(j) Modification</h4>
        <p className="text-gray-500 text-sm">
          Notwithstanding any provision in these Terms to the contrary, we agree that if Company makes any future material change to this Arbitration Agreement, you may reject that change within 30 days of such change becoming effective by writing Company at the following address: 1522 Western Ave, STE 24159, Seattle, Washington 98101.
        </p>
        {/* Electronic Communications Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.3 Electronic Communications</h3>
        <p className="text-gray-500 text-sm">
          The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal requirement that such communications would satisfy if it were be in a hardcopy writing. The foregoing does not affect your non-waivable rights.
        </p>
        {/* Entire Terms Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.4 Entire Terms</h3>
        <p className="text-gray-500 text-sm">
          These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word “including” means “including without limitation”. If any provision of these Terms is, for any reason, held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other. These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. Company may freely assign these Terms. The terms and conditions set forth in these Terms shall be binding upon assignees.
        </p>
        {/* Copyright/Trademark Information Subsection */}
        <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.5 Copyright/Trademark Information</h3>
        <p className="text-gray-500 text-sm">
          Copyright © 2025 PulseNow Platform, Inc. All rights reserved. All trademarks, logos and service marks (“Marks”) displayed on the Site are our property or the property of other third parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.
        </p>
        {/* Contact Information Subsection */}
        {/* <h3 className="text-xl font-medium bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mt-4 mb-2">8.6 Contact Information</h3>
        <p className="text-gray-500 text-sm">
          PulseNow Platform, Inc.<br />
          Address: 1522 Western Ave, STE 24159, Seattle, Washington 98101<br />
          Email: <a href="mailto:contact@pulsenow.io" className="text-blue-600 hover:underline">contact@pulsenow.io</a>
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blur border border-gray-200 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <Mail className="h-8 w-8 mx-auto mb-3 text-white" />
            <h4 className="font-semibold text-white mb-2">Email</h4>
            <p className="text-gray-600 text-sm"> Contact@pulsenow.io</p>
          </div>

          <div className="bg-blur border border-gray-200 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <Phone className="h-8 w-8 mx-auto mb-3 text-white" />
            <h4 className="font-semibold text-white mb-2">Phone</h4>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>

          <div className="bg-blur border border-gray-200 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-white" />
            <h4 className="font-semibold text-white mb-2">Address</h4>
            <p className="text-gray-600 text-sm">1522 Western Ave, STE 24159,<br />Seattle, Washington 98101</p>
          </div>
        </div> */}
      </section>
    </div>
  );
};



