export const getId = ({ url }: { url: string }) => {
    const pathItems = url.split("/");
    return pathItems[pathItems.length - 2];
};
