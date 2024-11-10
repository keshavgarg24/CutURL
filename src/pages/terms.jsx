import React from "react";

const TermsOfService = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 md:p-12 bg-black text-gray-200 rounded-lg shadow-xl my-10">
      <h1 className="text-5xl font-extrabold text-center text-red-600 mb-6">
        Terms of Service
      </h1>
      <p className="text-center text-sm text-gray-500 mb-10">
        Last updated: November 4, 2024
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-300 leading-relaxed">
          By using CutURL, you agree to these Terms of Service. Please read
          them carefully before using our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          2. Use of Service
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We grant you a limited, non-exclusive right to use CutURL for personal
          and professional purposes, as long as you adhere to these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          3. Prohibited Conduct
        </h2>
        <p className="text-gray-300 leading-relaxed">
          You may not use our service for unlawful activities, spam, malware
          distribution, or any other behavior that could harm CutURL or its
          users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          4. Termination
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We reserve the right to suspend or terminate your access to our
          service at any time, without prior notice, if we determine a breach of
          these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-300 leading-relaxed">
          CutURL is provided “as is” without any warranties. We are not liable
          for any damages resulting from your use of the service.
        </p>
      </section>

      <p className="text-center text-xs mt-10 text-gray-500">
        For questions, feel free to{" "}
        <a
          href="mailto:support@cuturl.tech"
          className="underline text-red-500 hover:text-red-700"
        >
          contact us
        </a>.
      </p>
    </div>
  );
};

export default TermsOfService;
