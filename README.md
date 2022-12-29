# Get Shopify Theme ID by Name in Github Actions

Action extracts Shopify Theme ID by provided theme name using Shopify Admin API.

## Inputs

### `store`

**Required** Store URL. Example: `my-store.myshopify.com`

### `token`

**Required** Custom Shopify App Access Token. Example: `shpat_1234567890`

### `theme_name`

**Required** The name of the theme to get ID for. Example: `My Theme`

## Outputs

### `id`

The ID of the theme.

## Example usage

```yaml
uses: GameSpecU/shopify-get-theme-id@main
with:
  store: 'my-store.myshopify.com'
  token: ${{ secrets.SHOPIFY_TOKEN }}
  theme_name: 'My Theme'
```
