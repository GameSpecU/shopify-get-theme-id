const core = require('@actions/core');
import {getThemeByName} from "./shopify";

function getActionInputs() {
    const store_url = core.getInput('store', {required: true});
    const access_token = core.getInput('token', {required: true});
    const theme_name = core.getInput('theme_name', {required: true});
    return {theme_name,store_url, access_token};
}


async function run() {
    try {
        const {theme_name,...SHOPIFY_AUTH} = getActionInputs();

        const theme = await getThemeByName(SHOPIFY_AUTH, theme_name);

        core.setOutput('theme_id', theme.id);

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
