"use client";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lock,
  Eye,
  Database,
  Users,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const lastUpdated = "May 2, 2025";

  return (
    <div className="min-h-screen inset-0 -z-10 pointer-events-none relative">
      {/* <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      />

      <div
        className="fixed left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"
        aria-hidden="true"
      /> */}

      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[90%] mx-auto text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-semibold mb-2 bg-gradient-to-r from-white to-grey-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated on {lastUpdated}</p>
          <p className="text-sm md:text-md text-gray-300 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our crypto analysis platform.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 relative space-y-12 text-white text-sm leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            <Database className="h-6 w-6 text-white" />
            Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Account information such as name, email address, and payment details.</li>
            <li>Usage data like your IP address, browser type, and referring pages.</li>
            <li>Any content or information you provide when interacting with our platform.</li>
            <li>Wallet addresses used for connecting and analyzing transactions.</li>
            <li>Device information including operating system and screen resolution.</li>
            <li>Geolocation data if you enable location services on your device.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text  text-transparent">
            <Eye className="h-6 w-6 text-white" />
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide and maintain our services.</li>
            <li>To analyze trends and improve user experience.</li>
            <li>To communicate updates, offers, or service-related notifications.</li>
            <li>To detect and prevent fraudulent or unauthorized activities.</li>
            <li>To personalize content and recommendations.</li>
            <li>To comply with legal obligations and enforce our policies.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            <Users className="h-6 w-6 text-white" />
            Information Sharing and Disclosure
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We do not sell your personal information.</li>
            <li>We may share data with trusted third-party vendors for business operations.</li>
            <li>We may disclose data if required by law or to protect our rights.</li>
            <li>Information may be shared during a business transfer or acquisition.</li>
            <li>Aggregated or de-identified data may be shared for research or analytics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            <Lock className="h-6 w-6 text-white" />
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. Our team uses encryption, access controls, and secure infrastructure practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            <Shield className="h-6 w-6 text-white" />
            Children’s Privacy
          </h2>
          <p>
            Our services are not intended for children under 13. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us at <a href="mailto:Contact@pulsenow.io" className="underline text-blue-400">Contact@pulsenow.io</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            <AlertTriangle className="h-6 w-6 text-white" />
            Your Rights
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You can access, update, or delete your personal information.</li>
            <li>You can opt out of marketing communications.</li>
            <li>You can disable cookies through your browser settings.</li>
            <li>You may request a copy of the information we hold about you.</li>
            <li>You can object to certain types of data processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-200 pb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            <Calendar className="h-6 w-6 text-white" />
            Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. The updated version will be indicated by a revised date and will be effective as soon as it is accessible. We encourage you to review this policy periodically for any changes.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4 border-b-2 border-gray-200 pb-2">
            Contact Us
          </h2>

          <div className="text-sm text-white leading-relaxed space-y-6">
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
            </div>
          </div>
        </section>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 Pulse Platform | All Rights Reserved.</p>
          <p className="text-gray-500 text-xs mt-2">This privacy policy is subject to change. Please review periodically.</p>
        </div>
      </div>
    </div>
  );
}
