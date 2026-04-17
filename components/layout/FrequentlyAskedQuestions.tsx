import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-10">
      <div className="mb-6 space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Frequently asked questions
        </h2>
        <p className="text-sm leading-6 text-neutral-600">
          Quick answers to common questions about shopping for electronics.
        </p>
      </div>

      <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
        <details className="group p-5" open>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-900">
            <span>How do computers enhance our lives?</span>
            <span className="text-neutral-400 transition group-open:rotate-180">
              ▾
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            Laptop and desktop computers support communication, learning, and
            productivity. Whether you’re writing, editing photos, gaming, or
            analyzing data, the right device can make everyday tasks faster and
            more enjoyable—at home, at school, or at work.
          </p>
        </details>

        <details className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-900">
            <span>Can video games have educational benefits?</span>
            <span className="text-neutral-400 transition group-open:rotate-180">
              ▾
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            Yes. Many games encourage problem solving, strategic thinking, and
            quick decision-making. Cooperative games can also build teamwork and
            communication skills, while creative and simulation games can spark
            curiosity and experimentation.
          </p>
        </details>

        <details className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-900">
            <span>
              What should I consider when buying smartphones and smartwatches?
            </span>
            <span className="text-neutral-400 transition group-open:rotate-180">
              ▾
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            Look at battery health, storage, camera quality, screen size, and
            carrier/network compatibility. For smartwatches, check fitness
            features, water resistance, and whether it pairs well with your
            phone’s ecosystem. Always compare condition grades and seller
            return policies.
          </p>
        </details>

        <details className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-900">
            <span>How do I choose the right digital camera?</span>
            <span className="text-neutral-400 transition group-open:rotate-180">
              ▾
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            Start with how you’ll use it: travel, sports, portraits, or video.
            Then compare sensor size, lens options, stabilization, battery life,
            and ergonomics. Consider total cost (body + lenses + memory +
            accessories) and whether you want compact portability or maximum
            image control.
          </p>
        </details>

        <details className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-neutral-900">
            <span>How do I choose home audio equipment?</span>
            <span className="text-neutral-400 transition group-open:rotate-180">
              ▾
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            Match the setup to your room size and listening style. Check
            connectivity (Bluetooth, HDMI ARC, optical), formats supported, and
            whether you want a simple soundbar or separate speakers + receiver.
            Buying used can be a great way to get higher-end gear for less.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
