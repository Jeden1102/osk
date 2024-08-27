import { useTranslations } from "next-intl";
interface Props {
  children: React.ReactNode;
}
const TextBlock = ({ children }: Props) => {
  const t = useTranslations();
  return (
    <section className="bg-gray-1 pb-8 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">{children}</div>
    </section>
  );
};

export default TextBlock;
