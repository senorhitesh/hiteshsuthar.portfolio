import {
  Building2,
  Clock,
  Code,
  Copy,
  LucideIcon,
  Mail,
  Map,
} from "lucide-react";

const BioCard = ({
  Icon,
  title,
  underLineText,
  copy,
}: {
  Icon: LucideIcon;
  title: string;
  underLineText?: string;
  copy?: boolean;
}) => {
  const textToCopy = title;
  console.log(navigator.clipboard);
  return (
    <div className="flex group items-center gap-2">
      <div className="w-6 text-neutral-600 h-6 rounded-md ring-2 ring-neutral-200  border border-neutral-50  flex items-center justify-center bg-gray-100">
        <Icon size={16} />
      </div>
      <p className="text-sm text-neutral-900">
        {title}
        {underLineText && (
          <span className="hover:underline underline-offset-2">
            {underLineText}
          </span>
        )}
      </p>
      {copy && (
        <div
          onClick={() => {
            navigator.clipboard.writeText(textToCopy);
          }}
          className="w-6 opacity-0 group-hover:opacity-100 transition  text-neutral-400 h-6 rounded-md hover:text-neutral-500    bg-white    flex items-center justify-center "
        >
          <Copy size={16} />
        </div>
      )}
    </div>
  );
};
const BioComponent = () => {
  return (
    <div className="w-full border-b font-mono tracking-tight border-neutral-200">
      <div className="mx-auto border-x gap-3 flex flex-col border-neutral-200 p-6 max-w-2xl">
        <BioCard
          Icon={Code}
          title={"Frotend Intern @"}
          underLineText={"softtechsolutions"}
        />
        <BioCard Icon={Map} title={"Sirohi, Rajasthan [IN] "} />
        <BioCard Icon={Mail} title={"senorhitesh@gmail.com"} copy={true} />
        <BioCard Icon={Building2} title={"BCA, IGNOU"} />
      </div>
    </div>
  );
};

export default BioComponent;
