(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{673:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("p",[e._v("The state contains information whose cryptographic digest is included in block headers, and thus is\nnecessary for validating new blocks. For instance, the validators set and the results of\ntransactions are never included in blocks, but their Merkle roots are - the state keeps track of them.")]),e._v(" "),a("p",[e._v("Note that the "),a("code",[e._v("State")]),e._v(" object itself is an implementation detail, since it is never\nincluded in a block or gossiped over the network, and we never compute\nits hash. Thus we do not include here details of how the "),a("code",[e._v("State")]),e._v(" object is\npersisted or queried. That said, the types it contains are part of the specification, since\ntheir Merkle roots are included in blocks and their values are used in\nvalidation.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdGF0ZSBzdHJ1Y3QgewogICAgQ2hhaW5JRCAgICAgICAgc3RyaW5nCiAgICBJbml0aWFsSGVpZ2h0ICBpbnQ2NAoKICAgIExhc3RCbG9ja0hlaWdodCBpbnQ2NAogICAgTGFzdEJsb2NrSUQgICAgIHR5cGVzLkJsb2NrSUQKICAgIExhc3RCbG9ja1RpbWUgICB0aW1lLlRpbWUKCiAgICBWZXJzaW9uICAgICBWZXJzaW9uCiAgICBMYXN0UmVzdWx0cyBbXVJlc3VsdAogICAgQXBwSGFzaCAgICAgW11ieXRlCgogICAgTGFzdFZhbGlkYXRvcnMgVmFsaWRhdG9yU2V0CiAgICBWYWxpZGF0b3JzICAgICBWYWxpZGF0b3JTZXQKICAgIE5leHRWYWxpZGF0b3JzIFZhbGlkYXRvclNldAoKICAgIENvbnNlbnN1c1BhcmFtcyBDb25zZW5zdXNQYXJhbXMKfQo="}}),e._v(" "),a("p",[e._v("The chain ID and initial height are taken from the genesis file, and not changed again. The\ninitial height will be "),a("code",[e._v("1")]),e._v(" in the typical case, "),a("code",[e._v("0")]),e._v(" is an invalid value.")]),e._v(" "),a("p",[e._v("Note there is a hard-coded limit of 10000 validators. This is inherited from the\nlimit on the number of votes in a commit.")]),e._v(" "),a("p",[e._v("Further information on "),a("RouterLink",{attrs:{to:"/spec/core/data_structures.html#validator"}},[a("code",[e._v("Validator")]),e._v("'s")]),e._v(",\n"),a("RouterLink",{attrs:{to:"/spec/core/data_structures.html#validatorset"}},[a("code",[e._v("ValidatorSet")]),e._v("'s")]),e._v(" and\n"),a("RouterLink",{attrs:{to:"/spec/core/data_structures.html#consensusparams"}},[a("code",[e._v("ConsensusParams")]),e._v("'s")]),e._v(" can\nbe found in "),a("RouterLink",{attrs:{to:"/spec/core/data_structures.html"}},[e._v("data structures")])],1),e._v(" "),a("h2",{attrs:{id:"execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution"}},[e._v("#")]),e._v(" Execution")]),e._v(" "),a("p",[e._v("State gets updated at the end of executing a block. Of specific interest is "),a("code",[e._v("ResponseEndBlock")]),e._v(" and\n"),a("code",[e._v("ResponseCommit")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSZXNwb25zZUVuZEJsb2NrIHN0cnVjdCB7CglWYWxpZGF0b3JVcGRhdGVzICAgICAgW11WYWxpZGF0b3JVcGRhdGUgICAgICAgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEscmVwLG5hbWU9dmFsaWRhdG9yX3VwZGF0ZXMsanNvbj12YWxpZGF0b3JVcGRhdGVzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3ZhbGlkYXRvcl91cGRhdGVzJnF1b3Q7YAoJQ29uc2Vuc3VzUGFyYW1VcGRhdGVzICp0eXBlczEuQ29uc2Vuc3VzUGFyYW1zIGBwcm90b2J1ZjomcXVvdDtieXRlcywyLG9wdCxuYW1lPWNvbnNlbnN1c19wYXJhbV91cGRhdGVzLGpzb249Y29uc2Vuc3VzUGFyYW1VcGRhdGVzLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2NvbnNlbnN1c19wYXJhbV91cGRhdGVzLG9taXRlbXB0eSZxdW90O2AKCUV2ZW50cyAgICAgICAgICAgICAgICBbXUV2ZW50ICAgICAgICAgICAgICAgICBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMyxyZXAsbmFtZT1ldmVudHMscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZXZlbnRzLG9taXRlbXB0eSZxdW90O2AKfQo="}}),e._v(" "),a("p",[e._v("where")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWYWxpZGF0b3JVcGRhdGUgc3RydWN0IHsKCVB1YktleSBjcnlwdG8uUHVibGljS2V5IGBwcm90b2J1ZjomcXVvdDtieXRlcywxLG9wdCxuYW1lPXB1Yl9rZXksanNvbj1wdWJLZXkscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7cHViX2tleSZxdW90O2AKCVBvd2VyICBpbnQ2NCAgICAgICAgICAgIGBwcm90b2J1ZjomcXVvdDt2YXJpbnQsMixvcHQsbmFtZT1wb3dlcixwcm90bzMmcXVvdDsganNvbjomcXVvdDtwb3dlcixvbWl0ZW1wdHkmcXVvdDtgCn0K"}}),e._v(" "),a("p",[e._v("and")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSZXNwb25zZUNvbW1pdCBzdHJ1Y3QgewoJLy8gcmVzZXJ2ZSAxCglEYXRhICAgICAgICAgW11ieXRlIGBwcm90b2J1ZjomcXVvdDtieXRlcywyLG9wdCxuYW1lPWRhdGEscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7ZGF0YSxvbWl0ZW1wdHkmcXVvdDtgCglSZXRhaW5IZWlnaHQgaW50NjQgIGBwcm90b2J1ZjomcXVvdDt2YXJpbnQsMyxvcHQsbmFtZT1yZXRhaW5faGVpZ2h0LGpzb249cmV0YWluSGVpZ2h0LHByb3RvMyZxdW90OyBqc29uOiZxdW90O3JldGFpbl9oZWlnaHQsb21pdGVtcHR5JnF1b3Q7YAp9Cg=="}}),e._v(" "),a("p",[a("code",[e._v("ValidatorUpdates")]),e._v(" are used to add and remove validators to the current set as well as update\nvalidator power. Setting validator power to 0 in "),a("code",[e._v("ValidatorUpdate")]),e._v(" will cause the validator to be\nremoved. "),a("code",[e._v("ConsensusParams")]),e._v(" are safely copied across (i.e. if a field is nil it gets ignored) and the\n"),a("code",[e._v("Data")]),e._v(" from the "),a("code",[e._v("ResponseCommit")]),e._v(" is used as the "),a("code",[e._v("AppHash")])]),e._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWZXJzaW9uIHN0cnVjdCB7CiAgY29uc2Vuc3VzIENvbnNlbnN1cwogIHNvZnR3YXJlIHN0cmluZwp9Cg=="}}),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/spec/core/data_structures.html#version"}},[a("code",[e._v("Consensus")])]),e._v(" contains the protocol version for the blockchain and the\napplication.")],1),e._v(" "),a("h2",{attrs:{id:"block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block"}},[e._v("#")]),e._v(" Block")]),e._v(" "),a("p",[e._v("The total size of a block is limited in bytes by the "),a("code",[e._v("ConsensusParams.Block.MaxBytes")]),e._v(".\nProposed blocks must be less than this size, and will be considered invalid\notherwise.")]),e._v(" "),a("p",[e._v('Blocks should additionally be limited by the amount of "gas" consumed by the\ntransactions in the block, though this is not yet implemented.')]),e._v(" "),a("h2",{attrs:{id:"evidence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evidence"}},[e._v("#")]),e._v(" Evidence")]),e._v(" "),a("p",[e._v("For evidence in a block to be valid, it must satisfy:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YmxvY2suSGVhZGVyLlRpbWUtZXZpZGVuY2UuVGltZSAmbHQ7IENvbnNlbnN1c1BhcmFtcy5FdmlkZW5jZS5NYXhBZ2VEdXJhdGlvbiAmYW1wOyZhbXA7CiBibG9jay5IZWFkZXIuSGVpZ2h0LWV2aWRlbmNlLkhlaWdodCAmbHQ7IENvbnNlbnN1c1BhcmFtcy5FdmlkZW5jZS5NYXhBZ2VOdW1CbG9ja3MK"}}),e._v(" "),a("p",[e._v("A block must not contain more than "),a("code",[e._v("ConsensusParams.Evidence.MaxBytes")]),e._v(" of evidence. This is\nimplemented to mitigate spam attacks.")]),e._v(" "),a("h2",{attrs:{id:"validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator"}},[e._v("#")]),e._v(" Validator")]),e._v(" "),a("p",[e._v("Validators from genesis file and "),a("code",[e._v("ResponseEndBlock")]),e._v(" must have pubkeys of type ∈\n"),a("code",[e._v("ConsensusParams.Validator.PubKeyTypes")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);