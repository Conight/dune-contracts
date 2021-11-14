import FungibleToken from "./FungibleToken.cdc"

// Token contract of Spice
pub contract Spice: FungibleToken {
    // Total supply of Spice in existence
    pub var totalSupply: UFix64

    // Event that is emitted when the contract is created
    pub event SpiceInitialized(initialSupply: UFix64)

    // Event that is emitted when spice are withdrawn from a Vault
    pub event SpiceWithdrawn(amount: UFix64, from: Address?)

    // Event that is emitted when spice are deposited to a Vault
    pub event SpiceDeposited(amount: UFix64, to: Address?)

    // Event that is emitted when new spice are minted
    pub event SpiceMinted(amount: UFix64)

    // Event that is emitted when spice are destroyed
    pub event SpiceBurned(amount: UFix64)



}