import reqInstance from "./config";

export const getData = async (type = "") => {
  try {
    const res = await reqInstance.get(`/${type}`);

    return res.data;
  } catch (err) {
    const error =
      err instanceof Error ? err.message : typeof err === "string" ? err : "";
    throw new Error(error);
  }
};
