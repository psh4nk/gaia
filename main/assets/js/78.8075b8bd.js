(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{681:function(t,c,b){"use strict";b.r(c);var d=b(1),l=Object(d.a)({},(function(){var t=this,c=t.$createElement,b=t._self._c||c;return b("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[b("h1",{attrs:{id:"formatting-a-community-pool-spend-proposal"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#formatting-a-community-pool-spend-proposal"}},[t._v("#")]),t._v(" Formatting a Community Pool Spend Proposal")]),t._v(" "),b("p",[t._v("There are five (5) components:")]),t._v(" "),b("ol",[b("li",[b("strong",[t._v("Title")]),t._v(" - the distinguishing name of the proposal, typically the way the that explorers list proposals")]),t._v(" "),b("li",[b("strong",[t._v("Description")]),t._v(" - the body of the proposal that further describes what is being proposed and details surrounding the proposal")]),t._v(" "),b("li",[b("strong",[t._v("Recipient")]),t._v(" - the Cosmos Hub (bech32-based) address that will receive funding from the Community Pool")]),t._v(" "),b("li",[b("strong",[t._v("Amount")]),t._v(" - the amount of funding that the recipient will receive in micro-ATOMs (uatom)")]),t._v(" "),b("li",[b("strong",[t._v("Deposit")]),t._v(' - the amount that will be contributed to the deposit (in micro-ATOMs "uatom") from the account submitting the proposal')])]),t._v(" "),b("h3",{attrs:{id:"simple-example"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#simple-example"}},[t._v("#")]),t._v(" Simple example")]),t._v(" "),b("p",[t._v("In this simple example (below), a network explorer will list the governance proposal as \"Community Pool Spend.\" When an observer selects the proposal, they'll see the description. Not all explorers will show the recipient and amount, so ensure that you verify that the description aligns with the what the governance proposal is programmed to enact. If the description says that a certain address will receive a certain number of ATOMs, it should also be programmed to do that, but it's possible that that's not the case (accidentally or otherwise).")]),t._v(" "),b("p",[t._v("The "),b("code",[t._v("amount")]),t._v(" is "),b("code",[t._v("1000000uatom")]),t._v(". 1,000,000 micro-ATOM is equal to 1 ATOM, so "),b("code",[t._v("recipient")]),t._v(" address "),b("code",[t._v("cosmos1qgfdn8h6fkh0ekt4n4d2c93c5gz3cv5gce783m")]),t._v(" will receive 1 ATOM if this proposal is passed.")]),t._v(" "),b("p",[t._v("The "),b("code",[t._v("deposit 512000000 uatom")]),t._v(" results in 512 ATOM being used from the proposal submitter's account. There is a minimum deposit required for a proposal to enter the voting period, and anyone may contribute to this deposit within a 14-day period. If the minimum deposit isn't reach before this time, the deposit amounts will be burned. Deposit amounts will also be burned if quorum isn't met in the vote or if the proposal is vetoed.")]),t._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtDb21tdW5pdHkgUG9vbCBTcGVuZCZxdW90OywKICAmcXVvdDtkZXNjcmlwdGlvbiZxdW90OzogJnF1b3Q7VGhpcyBpcyB0aGUgc3VtbWFyeSBvZiB0aGUga2V5IGluZm9ybWF0aW9uIGFib3V0IHRoaXMgcHJvcG9zYWwuIEluY2x1ZGUgdGhlIFVSTCB0byBhIFBERiB2ZXJzaW9uIG9mIHlvdXIgZnVsbCBwcm9wb3NhbC4mcXVvdDssCiAgJnF1b3Q7cmVjaXBpZW50JnF1b3Q7OiAmcXVvdDtjb3Ntb3MxcWdmZG44aDZma2gwZWt0NG40ZDJjOTNjNWd6M2N2NWdjZTc4M20mcXVvdDssCiAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwMDAwJnF1b3Q7CiAgICB9CiAgXSwKICAmcXVvdDtkZXBvc2l0JnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDs1MTIwMDAwMDAmcXVvdDsKICAgIH0KICBdCn0KCg=="}}),t._v(" "),b("h3",{attrs:{id:"real-example"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#real-example"}},[t._v("#")]),t._v(" Real example")]),t._v(" "),b("p",[t._v("This is the governance proposal that "),b("a",{attrs:{href:"https://twitter.com/Ether_Gavin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gavin Birch"),b("OutboundLink")],1),t._v(" ("),b("a",{attrs:{href:"https://figment.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Figment Networks"),b("OutboundLink")],1),t._v(") used to create "),b("a",{attrs:{href:"https://hubble.figment.network/cosmos/chains/cosmoshub-3/governance/proposals/23",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prop23, the first successful Cosmos Hub community-spend proposal"),b("OutboundLink")],1),t._v(".")]),t._v(" "),b("p",[t._v("You can query the proposal details with the gaiad command-line interface using this command: "),b("code",[t._v("gaiad q gov proposal 23 --chain-id cosmoshub-3 --node cosmos-node-1.figment.network:26657")])]),t._v(" "),b("p",[t._v("You use can also use "),b("a",{attrs:{href:"https://hubble.figment.network/cosmos/chains/cosmoshub-3/blocks/424035/transactions/B8E2662DE82413F03919712B18F7B23AF00B50DAEB499DAD8C436514640EFC79?format=json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hubble"),b("OutboundLink")],1),t._v(" or gaiad to query the transaction that I sent to create this proposal on-chain in full detail: "),b("code",[t._v("gaiad q tx B8E2662DE82413F03919712B18F7B23AF00B50DAEB499DAD8C436514640EFC79 --chain-id cosmoshub-3 --node cosmos-node-1.figment.network:26657")])]),t._v(" "),b("p",[b("strong",[t._v("Note")]),t._v(': "\\n" is used to create a new line.')]),t._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDtDb3Ntb3MgR292ZXJuYW5jZSBXb3JraW5nIEdyb3VwIC0gUTEgMjAyMCZxdW90OywKICAmcXVvdDtkZXNjcmlwdGlvbiZxdW90OzogJnF1b3Q7Q29zbW9zIEdvdmVybmFuY2UgV29ya2luZyBHcm91cCAtIFExIDIwMjAgZnVuZGluZ1xuXG5Db21tdW5pdHktc3BlbmQgcHJvcG9zYWwgc3VibWl0dGVkIGJ5IEdhdmluIEJpcmNoIChodHRwczovL3R3aXR0ZXIuY29tL0V0aGVyX0dhdmluKSBvZiBGaWdtZW50IE5ldHdvcmtzIChodHRwczovL2ZpZ21lbnQubmV0d29yaylcblxuLT0tPS1cblxuRnVsbCBwcm9wb3NhbDogaHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1TTUdFb1kyZGZ4QURQZmdvQXNKeGpqQzZod3BTTngxZFhBcWVQaUNFTUNiWVxuXG4tPS09LVxuXG5BbW91bnQgdG8gc3BlbmQgZnJvbSB0aGUgY29tbXVuaXR5IHBvb2w6IDUyNTAgQVRPTXNcblxuVGltZWxpbmU6IFExIDIwMjBcblxuRGVsaXZlcmFibGVzOlxuMS4gQSBnb3Zlcm5hbmNlIHdvcmtpbmcgZ3JvdXAgY29tbXVuaXR5ICZhbXA7IGNoYXJ0ZXJcbjIuIEEgdGVtcGxhdGUgZm9yIGNvbW11bml0eSBzcGVuZCBwcm9wb3NhbHNcbjMuIEEgYmVzdC1wcmFjdGljZXMgZG9jdW1lbnQgZm9yIGNvbW11bml0eSBzcGVuZCBwcm9wb3NhbHNcbjQuIEFuIGVkdWNhdGlvbmFsIHdpa2kgZm9yIHRoZSBDb3Ntb3MgSHViIHBhcmFtZXRlcnNcbjUuIEEgYmVzdC1wcmFjdGljZXMgZG9jdW1lbnQgZm9yIHBhcmFtZXRlciBjaGFuZ2VzXG42LiBNb250aGx5IGdvdmVybmFuY2Ugd29ya2luZyBncm91cCBjb21tdW5pdHkgY2FsbHMgKHRocmVlKVxuNy4gTW9udGhseSBHV0cgYXJ0aWNsZXMgKHRocmVlKVxuOC4gT25lIFEyIDIwMjAgR1dHIHJlY29tbWVuZGF0aW9ucyBhcnRpY2xlXG5cbk1pbGVzdG9uZXM6XG5CeSBlbmQgb2YgTW9udGggMSwgdGhlIENvc21vcyBHb3Zlcm5hbmNlIFdvcmtpbmcgR3JvdXAgKEdXRykgc2hvdWxkIGhhdmUgYmVlbiBpbml0aWF0ZWQgYW5kIGxlZCBieSBHYXZpbiBCaXJjaCBvZiBGaWdtZW50IE5ldHdvcmtzLlxuQnkgZW5kIG9mIE1vbnRoIDIsIEdhdmluIEJpcmNoIGlzIHRvIGhhdmUgaW5pdGlhdGVkIGFuZCBsZWQgR1dH4oCZcyBlZHVjYXRpb24sIGJlc3QgcHJhY3RpY2VzLCBhbmQgUTIgcmVjb21tZW5kYXRpb25zLlxuQnkgZW5kIG9mIE1vbnRoIDMsIEdhdmluIEJpcmNoIGlzIHRvIGhhdmUgbGVkIGFuZCBwdWJsaXNoZWQgaW5pdGlhbCBnb3Zlcm5hbmNlIGVkdWNhdGlvbiwgYmVzdCBwcmFjdGljZXMsIGFuZCBRMiByZWNvbW1lbmRhdGlvbnMuXG5cbkRldGFpbGVkIG1pbGVzdG9uZXMgYW5kIGZ1bmRpbmc6XG5odHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xbUZFdk1TTGJpSG9WQVlxQnE4bG8zcVF3M0t0UE1FcURGejQ3RVNmNkhFZy9lZGl0P3VzcD1zaGFyaW5nXG5cbkJleW9uZCB0aGUgbWlsZXN0b25lcywgR2F2aW4gd2lsbCBsZWFkIHRoZSBHV0cgdG8gZW5nYWdlIGluIGFuZCBhbnN3ZXIgZ292ZXJuYW5jZS1yZWxhdGVkIHF1ZXN0aW9ucyBvbiB0aGUgQ29zbW9zIERpc2NvdXJzZSBmb3J1bSwgVHdpdHRlciwgdGhlIHByaXZhdGUgQ29zbW9zIFZJUCBUZWxlZ3JhbSBjaGFubmVsLCBhbmQgdGhlIENvc21vcyBzdWJyZWRkaXQuIFRoZSBHV0cgd2lsbCBlbmdhZ2Ugd2l0aCBzdGFrZS1ob2xkZXJzIHRvIGxvd2VyIHRoZSBiYXJyaWVycyB0byBnb3Zlcm5hbmNlIHBhcnRpY2lwYXRpb24gd2l0aCB0aGUgYWltIG9mIGVtcG93ZXJpbmcgdGhlIENvc21vcyBIdWLigJlzIHN0YWtlaG9sZGVycy4gVGhlIEdXRyB3aWxsIHVzZSB0aGlzIGVuZ2FnZW1lbnQgdG8gZ3VpZGUgcmVjb21tZW5kYXRpb25zIGZvciBmdXR1cmUgR1dHIHBsYW5uaW5nLlxuXG5SZWFkIG1vcmUgYWJvdXQgdGhlIG91ciBlZmZvcnRzIHRvIGxhdW5jaCB0aGUgQ29zbW9zIEdXRyBoZXJlOiBodHRwczovL2ZpZ21lbnQubmV0d29yay9yZXNvdXJjZXMvaW50cm9kdWNpbmctdGhlLWNvc21vcy1nb3Zlcm5hbmNlLXdvcmtpbmctZ3JvdXAvXG5cbi09LT0tXG5cbl9Qcm9ibGVtX1xuUGVyaGFwcyB0aGUgbW9zdCBkaWZmaWN1bHQgYmFycmllciB0byBlZmZlY3RpdmUgZ292ZXJuYW5jZSBpcyB0aGF0IGl0IGRlbWFuZHMgb25lIG9mIG91ciBtb3N0IHZhbHVhYmxlIGFuZCBzY2FyY2UgcmVzb3VyY2VzOiBvdXIgYXR0ZW50aW9uLiBTdGFrZWhvbGRlcnMgbWF5IGJlIGRpc2FkdmFudGFnZWQgYnkgaW5mb3JtYXRpb25hbCBvciByZXNvdXJjZS1iYXNlZCBhc3ltbWV0cmllcywgd2hpbGUgb3RoZXIgZW50aXRpZXMgbWF5IGV4cGxvaXQgdGhlc2Ugc2FtZSBhc3ltbWV0cmllcyB0byBjYXB0dXJlIHZhbHVlIGNvbnRyb2xsZWQgYnkgdGhlIENvc21vcyBIdWLigJlzIGdvdmVybmFuY2UgbWVjaGFuaXNtcy5cblxuV2XigJlyZSBjb25jZXJuZWQgdGhhdCB3aXRob3V0IGVzdGFibGlzaGluZyBjb21tdW5pdHkgc3RhbmRhcmRzLCBwcm9jZXNzZXMsIGFuZCBkcml2aW5nIGRlY2VudHJhbGl6ZWQgZGVsZWdhdG9yLWJhc2VkIHBhcnRpY2lwYXRpb24sIHRoZSBDb3Ntb3MgSHViIGdvdmVybmFuY2UgbWVjaGFuaXNtIGNvdWxkIGJlIGNvLW9wdGVkIGJ5IGEgY2VudHJhbGl6ZWQgcG93ZXIuIEFzIGdvdmVybmFuY2UgZnVuY3Rpb25hbGl0eSBkZXZlbG9wcywgcG90ZW50aWFsIHBhcnRpY2lwYW50cyB3aWxsIG5lZWQgdG8gdW5kZXJzdGFuZCBob3cgdG8gYXNzZXNzIHByb3Bvc2FscyBieSBrbm93aW5nIHdoYXQgdG8gcGF5IGF0dGVudGlvbiB0by5cblxuX1NvbHV0aW9uX1xuV2XigJlyZSBmb3JtaW5nIGEgZm9jdXNlZCwgZGl2ZXJzZSBncm91cCB0aGF04oCZcyBjYXBhYmxlIG9mIGFzc2Vzc2luZyBhbmQgc3ludGhlc2l6aW5nIHRoZSBrZXkgcGFydHMgb2YgYSBwcm9wb3NhbCBzbyB0aGF0IHRoZSB2b3RpbmcgY29tbXVuaXR5IGNhbiBnZXQgYSBmYWlyIHN1bW1hcnkgb2Ygd2hhdCB0aGV5IG5lZWQgdG8ga25vdyBiZWZvcmUgdm90aW5nLlxuXG5PdXIgc29sdXRpb24gaXMgdG8gaW5pdGlhdGUgYSBDb3Ntb3MgZ292ZXJuYW5jZSB3b3JraW5nIGdyb3VwIHRoYXQgZGV2ZWxvcHMgZGVjZW50cmFsaXplZCBjb21tdW5pdHkgZ292ZXJuYW5jZSBlZmZvcnRzIGFsb25nc2lkZSB0aGUgSHVi4oCZcyBkZXZlbG9wbWVudC4gV2Ugd2lsbCBkZXZlbG9wIGFuZCBkb2N1bWVudCBnb3Zlcm5hbmNlIGZlYXR1cmVzIGFuZCBwcmFjdGljZXMsIGFuZCB0aGVuIGNvbW11bmljYXRlIHRoZXNlIHRvIHRoZSBicm9hZGVyIENvc21vcyBjb21tdW5pdHkuXG5cbl9GdXR1cmVfXG5BdCB0aGUgZW5kIG9mIFExLCB3ZeKAmWxsIHB1Ymxpc2ggcmVjb21tZW5kYXRpb25zIGZvciB0aGUgZnV0dXJlIG9mIHRoZSBDb3Ntb3MgR1dHLCBhbmQgaWRlYWxseSB3ZeKAmWxsIGJlIHByZXBhcmVkIHRvIHN1Ym1pdCBhIHByb3Bvc2FsIGJhc2VkIHVwb24gdGhvc2UgcmVjb21tZW5kYXRpb25zIGZvciBRMiAyMDIwLiBXZSBwbGFuIHRvIGNvbnRpbnVlIG91ciB3b3JrIGluIGJsb2NrY2hhaW4gZ292ZXJuYW5jZSwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBIdWIgcGFzc2VzIG91ciBwcm9wb3NhbHMuXG5cbi09LT0tXG5cbkNvc21vcyBmb3J1bTogaHR0cHM6Ly9mb3J1bS5jb3Ntb3MubmV0d29yay9jL2dvdmVybmFuY2VcbkNvc21vcyBHV0cgVGVsZWdyYW0gY2hhbm5lbDogaHR0cHM6Ly90Lm1lL2h1YmdvdlxuVHdpdHRlcjogaHR0cHM6Ly90d2l0dGVyLmNvbS9Db3Ntb3NHb3YmcXVvdDssCiAgJnF1b3Q7cmVjaXBpZW50JnF1b3Q7OiAmcXVvdDtjb3Ntb3MxaGpjdDZxN25wc3Nwc2czZGd2emszc2RmODlzcG1scGZnOHd3ZjcmcXVvdDssCiAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICB7CiAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDt1YXRvbSZxdW90OywKICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDs1MjUwMDAwMDAwJnF1b3Q7CiAgICB9CiAgXSwKICAmcXVvdDtkZXBvc2l0JnF1b3Q7OiZxdW90OzEyMDAwMDAwdWF0b20mcXVvdDsKfQo="}})],1)}),[],!1,null,null,null);c.default=l.exports}}]);