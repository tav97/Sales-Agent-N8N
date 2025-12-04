# Automated Sales KPI Engine using n8n

This repository contains an automated Sales KPI Engine built using n8n.  
The workflow reads an ERP exported Excel file, converts it into structured JSON, aggregates monthly sales, and produces a formatted summary report along with detailed performance metrics for distributors and items.

---

## 📊 Dataset Structure

The Excel dataset includes:

- Distributor  
- Item name  
- August sales  
- September sales  
- October sales  

Each row represents a unique product sold by a specific distributor.  
Monthly numbers are pre aggregated volumes pulled directly from ERP exports.

Example of a structured row after processing:

```json
{
  "distributor": "Cascade Beverage Supply",
  "itemName": "Hibiscus Lemonade 12/19.2 oz Can",
  "aug": 1286.2666,
  "sep": 1481.6,
  "oct": 1451.4667
}

