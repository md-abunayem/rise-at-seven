interface NavItemCardProps {
  url: string;
  label1: string;
  label2?: string;
  label3?: string;
  label4?: string;
}

const NavItemCard = ({
  url,
  label1,
  label2,
  label3,
  label4,
}: NavItemCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-fit bg-white justify-between rounded-3xl overflow-hidden">
      {/* left */}
      <div className="text-black p-4 sm:p-6 lg:p-8 flex flex-col justify-center w-full lg:max-w-136">
        <div className="text-lg sm:text-xl lg:text-2xl font-semibold w-full">
          <div className="space-y-2">
            {label1 && <p>{label1}</p>}
            {label2 && <p>{label2}</p>}
            {label3 && <p>{label3}</p>}
            {label4 && <p>{label4}</p>}
          </div>
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-70 xl:w-[320px] p-4 lg:pl-0 lg:pr-4 lg:py-4 shrink-0">
        <div className="relative w-full h-60 sm:h-65 rounded-2xl overflow-hidden">
          <img
            src={url}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NavItemCard;