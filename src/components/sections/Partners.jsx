import crowdstrike from "../../assets/partnerImg/Logo=i3.png";
import airbus from "../../assets/partnerImg/Logo=i5.png";
import hays from "../../assets/partnerImg/Logo=i2.png";
import medwing from "../../assets/partnerImg/Logo=i8.png";
import autotrader from "../../assets/partnerImg/Logo=i6.png";
import liquidweb from "../../assets/partnerImg/Logo=i15.png";
import cathay from "../../assets/partnerImg/Logo=i4.png";

const partners = [
  { src: crowdstrike, alt: "Crowdstrike" },
  { src: airbus, alt: "Airbus" },
  { src: hays, alt: "Hays" },
  { src: medwing, alt: "Medwing" },
  { src: medwing, alt: "Medwing" },
  { src: cathay, alt: "Cathay" },
  { src: liquidweb, alt: "Liquid Web" },
  { src: autotrader, alt: "Autotrader" },
];
export default function Partners() {
  return (
    <section className="py-12 px-6 bg-secondary">
  <div className="container mx-auto px-4 md:px-6">
    <div className="mx-auto max-w-[620px] text-center">
      <h2 className="font-inter text-[28px] sm:text-[34px] md:text-[48px] font-extrabold leading-tight text-[#0B1C30]">
        Partners
      </h2>

      <p className="mx-auto mt-2 mb-8 sm:mt-3 max-w-[500px] font-inter text-sm sm:text-base leading-6 sm:leading-7 text-[#17171799]">
        Powered by the world's leading partners — built for reliability,
        scale, and performance.
      </p>
    </div>

    <div className="max-w-[1200px] mx-auto px-0 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
        {partners.map((p, i) => (
          <div
            key={i}
            className="
              w-full max-w-[245px]
              h-[100px] md:h-[128px]
              rounded-[20px] md:rounded-[24px]
              bg-[#F8F8F8]
              flex items-center justify-center
              px-4
              transition-all duration-300
              hover:shadow-md hover:-translate-y-1
            "
          >
            <img
              src={p.src}
              alt={p.alt}
              className="
                w-auto h-auto
                max-w-full max-h-full
                object-contain
              "
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
