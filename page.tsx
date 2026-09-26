import Link from "next/link";

const steps = [
  {
    n: "1",
    title: "Imepokelewa",
    body: "Ofisi inaandikisha mzigo na kutengeneza namba ya ufuatiliaji.",
  },
  {
    n: "2",
    title: "Imepakiwa",
    body: "Mzigo unapakiwa kwenye gari la safari husika.",
  },
  {
    n: "3",
    title: "Imeondoka / Imefika",
    body: "Dereva anasasisha hali akiwa njiani na anapofika kituoni.",
  },
  {
    n: "4",
    title: "Imethibitishwa",
    body: "Msimamizi wa kituo anathibitisha mzigo umepokelewa salama.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <p className="text-amber-dark font-medium mb-4">Kwa makampuni ya usafirishaji Tanzania</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-ink max-w-2xl">
          Mzigo wako, mnajua uko wapi — bila kupiga simu.
        </h1>
        <p className="mt-5 text-lg text-muted max-w-xl">
          Fuatilia inaondoa simu za kila siku za &ldquo;mzigo wangu uko wapi&rdquo; na
          inazuia mizigo kupotea kwa kuthibitisha kila hatua, kutoka ofisini
          hadi kituo cha mwisho.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/track"
            className="bg-teal text-paper px-6 py-3 rounded-md font-medium hover:bg-teal-light transition-colors"
          >
            Fuatilia Mzigo Wako
          </Link>
          <a
            href="mailto:hello@fuatilia.co.tz?subject=Nataka%20Demo%20ya%20Fuatilia"
            className="border border-teal text-teal px-6 py-3 rounded-md font-medium hover:bg-teal hover:text-paper transition-colors"
          >
            Omba Demo kwa Kampuni Yako
          </a>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-ink mb-2">
            Hatua nne, si ramani ngumu ya GPS
          </h2>
          <p className="text-muted max-w-xl mb-10">
            Kila mzigo unapita hatua zinazothibitishwa na mtu halisi, hivyo
            hakuna hatua inayorukwa bila mtu kuwajibika.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="border border-line rounded-lg p-5">
                <span className="font-display text-2xl text-amber-dark">{s.n}</span>
                <h3 className="font-display font-semibold text-ink mt-3 mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-ink mb-2">
          Kwa wamiliki wa makampuni
        </h2>
        <p className="text-muted max-w-xl mb-8">
          Fuatilia ni mfumo wa ndani wa kampuni yako — data yako inabaki
          yako, wateja wako wanabaki wateja wako.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-display font-semibold text-ink mb-1">
              Onyo la mzigo hatarini
            </h3>
            <p className="text-sm text-muted">
              Mzigo ukikaa bila kuthibitishwa kufika, msimamizi anapata onyo
              papo hapo.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink mb-1">
              Ukurasa wa mteja
            </h3>
            <p className="text-sm text-muted">
              Mteja anaingiza namba ya mzigo na kuona hali yake — hakuna
              app ya kupakua.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink mb-1">
              Ripoti za wamiliki
            </h3>
            <p className="text-sm text-muted">
              Idadi ya mizigo kwa siku, wiki na njia, mahali pamoja.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
