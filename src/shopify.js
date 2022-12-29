import axios from "axios";
const core = require('@actions/core');

const API_VERSION = "2022-10";

export async function getAllThemes (SHOPIFY_AUTH){
  const {
    data: { themes },
  } = await axios.get(
      `https://${SHOPIFY_AUTH.store_url}/admin/api/${API_VERSION}/themes.json`,
          {
            headers: { "X-Shopify-Access-Token": SHOPIFY_AUTH.access_token },
          }
  );

  return themes;
}

export async function getThemeByName(SHOPIFY_AUTH, theme_name){
    const themes = await getAllThemes(SHOPIFY_AUTH);

    core.debug(`Found ${themes.length} themes`);

    for (const theme of themes) {
        core.debug(`Found theme: ${theme.name} with ID: ${theme.id}`);
    }

    const themeWeWereLookingFor = themes.find((theme) => theme.name === theme_name);
    if (!themeWeWereLookingFor) {
        core.warning(`Cannot find theme with name: ${theme_name}`);
    } else {
        core.info(`Found theme: ${themeWeWereLookingFor.name} with ID: ${themeWeWereLookingFor.id}`);
    }
    return themeWeWereLookingFor;
}
