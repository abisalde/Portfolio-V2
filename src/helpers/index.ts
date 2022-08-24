type OpenGraphType = {
  title: string;
  description: string;
  logo?: string;
};

export const openGraph = ({ title, description, logo = "" }: OpenGraphType): string => {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(title.trim());
  const ogDesc = encodeURIComponent(description.trim());

  return `${ogLogo} + ${ogSiteName} + ${ogDesc} `;
};
