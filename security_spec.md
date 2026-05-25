# KAG Stockpile & Hardware Supplies

## Data Invariants
- A Quote must include at least one product or a bundle.
- Delivery calculations require a valid parish and area.
- Trade Club applications must capture a Business Name or TRN (Tax Registration Number) if possible.

## The "Dirty Dozen" Payloads (Security Testing)
1. **The Price Hijack:** Attempt to submit an order with a price manually set to $0.01.
2. **The Orphaned Quote:** Attempt to create a quote without a user owner.
3. **The Admin Escalation:** Attempt to set `isAdmin: true` on a user profile.
4. **The Ghost Order:** Attempt to fetch order history for another user's ID.
5. **The Negative Quantity:** Attempt to add -10 bags of cement to a cart.
... (detailed in final rules)
