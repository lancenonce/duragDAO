import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0056a69983F0a513C92A59A67f7c233f1c2c1A3C",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Royal Crown Durag",
        description: "This NFT will give you the waves of Poseidon!",
        image: readFileSync("scripts/assets/RoyalCrown.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()