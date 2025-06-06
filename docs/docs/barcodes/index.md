---
title: Barcodes
---

## Barcode Support

InvenTree has native support for barcodes, which provides powerful functionality "out of the box", and can be easily extended:

- Barcodes can be scanned [via the API](../api/index.md)
- The web interface supports barcode scanning
- Barcodes integrate natively [with the mobile app](../app/barcode.md)
- Custom barcodes can be assigned to items
- Barcodes can be embedded in [labels or reports](../report/barcodes.md)
- Barcode functionality can be [extended via plugins](../plugins/mixins/barcode.md)

### Barcode Formats

InvenTree supports the following barcode formats:

- [Internal Barcodes](./internal.md): Native InvenTree barcodes, which are automatically generated for each item
- [External Barcodes](./external.md): External (third party) barcodes which can be assigned to items
- [Custom Barcodes](./custom.md): Fully customizable barcodes can be generated using the plugin system.

### Barcode Model Linking

Barcodes can be linked with the following data model types:

- [Part](../part/index.md#part)
- [Stock Item](../stock/index.md#stock-item)
- [Stock Location](../stock/index.md#stock-location)
- [Supplier Part](../purchasing/supplier.md#supplier-parts)
- [Purchase Order](../purchasing/purchase_order.md#purchase-orders)
- [Sales Order](../sales/sales_order.md#sales-orders)
- [Return Order](../sales/return_order.md#return-orders)
- [Build Order](../manufacturing/build.md#build-orders)

### Configuration Options

The barcode system can be configured via the [global settings](../settings/global.md#barcodes).

## Web Integration

Barcode scanning can be enabled within the web interface. This allows users to scan barcodes directly from the web browser.

### Input Modes

The following barcode input modes are supported by the web interface:

- **Webcam**: Use a connected webcam to scan barcodes
- **Scanner**: Use a connected barcode scanner to scan barcodes
- **Keyboard**: Manually enter a barcode via the keyboard

### Quick Scan

If barcode scanning is enabled in the web interface, select the barcode icon in the top-right of the menu bar to perform a quick-scan of a barcode. If the barcode is recognized by the system, the web browser will automatically navigate to the correct item:

{{ image("barcode/barcode_scan.png", "Barcode scan") }}

If no match is found for the scanned barcode, the following error message is displayed:

{{ image("barcode/barcode_no_match.png", "No match for barcode") }}

### Scanning Action Page

A more comprehensive barcode scanning interface is available via the "Scan" page in the web interface. This page allows the user to scan multiple barcodes, and perform certain actions on the scanned items.

To access this page, select *Scan Barcode* from the main navigation menu:

{{ image("barcode/barcode_nav_menu.png", "Barcode menu item") }}
{{ image("barcode/barcode_scan_page.png", "Barcode scan page") }}


## App Integration

Barcode scanning is a key feature of the [companion mobile app](../app/barcode.md). When running on a device with an integrated camera, the app can scan barcodes directly from the camera feed.

## Barcode History

If enabled, InvenTree can retain logs of the most recent barcode scans. This can be very useful for debugging or auditing purpopes.

Refer to the [barcode settings](../settings/global.md#barcodes) to enable barcode history logging.

The barcode history can be viewed via the admin panel in the web interface.
