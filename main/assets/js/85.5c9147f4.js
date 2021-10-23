(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{582:function(e,a,o){"use strict";o.r(a);var r=o(1),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"modulo-gov"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modulo-gov"}},[e._v("#")]),e._v(" Módulo "),o("code",[e._v("gov")])]),e._v(" "),o("p",[e._v("El módulo "),o("code",[e._v("gov")]),e._v(" es responsable de las propuestas de gobierno en cadena y la funcionalidad de la votación. Nótese que "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5800",target:"_blank",rel:"noopener noreferrer"}},[e._v("este módulo requiere una forma única de cambiar sus parámetros"),o("OutboundLink")],1),e._v(". "),o("code",[e._v("gov")]),e._v(" está activo en Cosmos Hub 3 y actualmente tiene tres parámetros con seis subkeys que pueden ser modificados por una propuesta de gobernanza:")]),e._v(" "),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"#1-depositparams"}},[o("code",[e._v("depositparams")])])]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#mindeposit"}},[o("code",[e._v("mindeposit")])]),e._v(" - "),o("code",[e._v("512000000")]),e._v(" "),o("code",[e._v("uatom")]),e._v(" (micro-ATOMs)")]),e._v(" "),o("li",[o("a",{attrs:{href:"#maxdepositperiod"}},[o("code",[e._v("maxdepositperiod")])]),e._v(" - "),o("code",[e._v("1209600000000000")]),e._v(" (nanosegundos)")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#2-votingparams"}},[o("code",[e._v("votingparams")])])]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#votingperiod"}},[o("code",[e._v("votingperiod")])]),e._v(" - "),o("code",[e._v("1209600000000000")]),e._v(" (nanosegundos)")])])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#3-tallyparams"}},[o("code",[e._v("tallyparams")])])]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#quorum"}},[o("code",[e._v("quorum")])]),e._v(" - "),o("code",[e._v("0.400000000000000000")]),e._v(" (proporción de la red)")]),e._v(" "),o("li",[o("a",{attrs:{href:"#threshold"}},[o("code",[e._v("threshold")])]),e._v(" - "),o("code",[e._v("0.500000000000000000")]),e._v(" (proporción del poder de voto)")]),e._v(" "),o("li",[o("a",{attrs:{href:"#veto"}},[o("code",[e._v("veto")])]),e._v(" - "),o("code",[e._v("0.334000000000000000")]),e._v(" (proporción del poder de voto)")])])])]),e._v(" "),o("p",[e._v("Los valores de lanzamiento de cada subkey de los parámetros están indicados arriba, pero puede "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#verify-parameter-values"}},[e._v("verificarlos usted mismo")]),e._v(".")],1),e._v(" "),o("p",[e._v("Se están considerando "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#future"}},[e._v("algunas funciones adicionales")]),e._v(" para el desarrollo del módulo de gobernanza.")],1),e._v(" "),o("p",[e._v("Si estás técnicamente preparado, "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#technical-specifications"}},[e._v("estas son las especificaciones técnicas")]),e._v(". Si quieres crear una propuesta para cambiar uno o más de estos parámetros, "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/submitting.html#formatting-the-json-file-for-the-governance-proposal"}},[e._v("mira esta sección para el formato")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"_1-depositparams"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-depositparams"}},[e._v("#")]),e._v(" 1. "),o("code",[e._v("depositparams")])]),e._v(" "),o("h2",{attrs:{id:"mindeposit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mindeposit"}},[e._v("#")]),e._v(" "),o("code",[e._v("mindeposit")])]),e._v(" "),o("h3",{attrs:{id:"el-deposito-minimo-requerido-para-que-una-propuesta-entre-en-el-periodo-de-votacion-en-micro-atoms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#el-deposito-minimo-requerido-para-que-una-propuesta-entre-en-el-periodo-de-votacion-en-micro-atoms"}},[e._v("#")]),e._v(" El depósito mínimo requerido para que una propuesta entre en el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(", en micro-ATOMs")],1),e._v(" "),o("h4",{attrs:{id:"cosmoshub-3-por-defecto-512000000-uatom"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmoshub-3-por-defecto-512000000-uatom"}},[e._v("#")]),e._v(" "),o("code",[e._v("cosmoshub-3")]),e._v(" por defecto: "),o("code",[e._v("512000000")]),e._v(" "),o("code",[e._v("uatom")])]),e._v(" "),o("p",[e._v("Antes de que una propuesta de gobierno entre en el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(" (es decir, para que la propuesta sea votada), debe haber al menos un número mínimo de ATOMs depositados. Cualquiera puede contribuir a este depósito. Los depósitos de las propuestas aprobadas y fallidas se devuelven a los contribuyentes. Los depósitos se queman cuando las propuestas 1) "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#maxdepositperiod"}},[e._v("expiran")]),e._v(", 2) no alcanzan el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#quorum"}},[e._v("quórum")]),e._v(", o 3) son "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#veto"}},[e._v("vetadas")]),e._v(". El valor de subkey de este parámetro representa el depósito mínimo requerido para que una propuesta entre en el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(" en micro-ATOMs, donde "),o("code",[e._v("512000000uatom")]),e._v(" equivalen a 512 ATOM.")],1),e._v(" "),o("h3",{attrs:{id:"posibles-consecuencias"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posibles-consecuencias"}},[e._v("#")]),e._v(" Posibles consecuencias")]),e._v(" "),o("h4",{attrs:{id:"disminucion-del-valor-mindeposit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disminucion-del-valor-mindeposit"}},[e._v("#")]),e._v(" Disminución del valor "),o("code",[e._v("mindeposit")])]),e._v(" "),o("p",[e._v("La disminución del valor de subkey "),o("code",[e._v("mindeposit")]),e._v(" permitirá que las propuestas de gobernanza entren en el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(" con menos ATOMs en juego. Es probable que esto aumente el volumen de nuevas propuestas de gobernanza.")],1),e._v(" "),o("h4",{attrs:{id:"aumentar-el-valor-mindeposit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aumentar-el-valor-mindeposit"}},[e._v("#")]),e._v(" Aumentar el valor "),o("code",[e._v("mindeposit")])]),e._v(" "),o("p",[e._v("Para aumentar el valor de subkey "),o("code",[e._v("mindeposit")]),e._v(" será necesario arriesgar un mayor número de ATOMs antes de que las propuestas de gobierno puedan entrar en el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(". Es probable que esto disminuya el volumen de nuevas propuestas de gobierno.")],1),e._v(" "),o("h2",{attrs:{id:"maxdepositperiod"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#maxdepositperiod"}},[e._v("#")]),e._v(" "),o("code",[e._v("maxdepositperiod")])]),e._v(" "),o("h3",{attrs:{id:"la-cantidad-maxima-de-tiempo-que-una-propuesta-puede-aceptar-contribuciones-de-deposito-antes-de-expirar-en-nanosegundos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#la-cantidad-maxima-de-tiempo-que-una-propuesta-puede-aceptar-contribuciones-de-deposito-antes-de-expirar-en-nanosegundos"}},[e._v("#")]),e._v(" La cantidad máxima de tiempo que una propuesta puede aceptar contribuciones de depósito antes de expirar, en nanosegundos.")]),e._v(" "),o("h4",{attrs:{id:"cosmoshub-3-por-defecto-1209600000000000"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmoshub-3-por-defecto-1209600000000000"}},[e._v("#")]),e._v(" "),o("code",[e._v("cosmoshub-3")]),e._v(" por defecto: "),o("code",[e._v("1209600000000000")])]),e._v(" "),o("p",[e._v("Antes de que una propuesta de gobierno entre en el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(", debe haber al menos un número mínimo de ATOMs depositados. El valor de subkey de este parámetro representa la cantidad máxima de tiempo que la propuesta tiene para alcanzar la cantidad mínima de depósito antes de expirar. La cantidad máxima de tiempo que una propuesta puede aceptar contribuciones de depósito antes de expirar es actualmente de 1209600000000000 nanosegundos o 14 días. Si la propuesta expira, cualquier cantidad de depósito será quemada.")],1),e._v(" "),o("h3",{attrs:{id:"posibles-consecuencias-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posibles-consecuencias-2"}},[e._v("#")]),e._v(" Posibles consecuencias")]),e._v(" "),o("h4",{attrs:{id:"disminucion-del-valor-maxdepositperiod"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disminucion-del-valor-maxdepositperiod"}},[e._v("#")]),e._v(" Disminución del valor "),o("code",[e._v("maxdepositperiod")])]),e._v(" "),o("p",[e._v("La disminución del valor de subkey "),o("code",[e._v("maxdepositperiod")]),e._v(" reducirá el tiempo de depósito de las contribuciones a las propuestas de gobernanza. Es probable que esto disminuya el tiempo que algunas propuestas permanecen visibles y que disminuya la probabilidad de que entren en el período de votación. Esto puede aumentar la probabilidad de que las propuestas caduquen y se quemen sus depósitos.")]),e._v(" "),o("h4",{attrs:{id:"aumentar-el-valor-maxdepositperiod"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aumentar-el-valor-maxdepositperiod"}},[e._v("#")]),e._v(" Aumentar el valor "),o("code",[e._v("maxdepositperiod")])]),e._v(" "),o("p",[e._v("El aumento del valor de subkey "),o("code",[e._v("maxdepositperiod")]),e._v(" ampliará el plazo para las contribuciones de depósito a las propuestas de gobernanza. Es probable que esto aumente el tiempo en que algunas propuestas siguen siendo visibles y aumente potencialmente la probabilidad de que entren en el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(". Esto puede disminuir la probabilidad de que las propuestas caduquen y se quemen sus depósitos.")],1),e._v(" "),o("h4",{attrs:{id:"observaciones"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#observaciones"}},[e._v("#")]),e._v(" Observaciones")]),e._v(" "),o("p",[e._v("Actualmente, la mayoría de los exploradores de la red (por ejemplo, Hubble, Big Dipper, Mintscan) dan la misma visibilidad a las propuestas en el período de depósito que a las del "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(". Esto significa que una propuesta con un pequeño depósito (por ejemplo, 0.001 ATOM) tendrá la misma visibilidad que aquellas con un depósito completo de 512 ATOM en el período de votación.")],1),e._v(" "),o("h2",{attrs:{id:"_2-votingparams"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-votingparams"}},[e._v("#")]),e._v(" 2. "),o("code",[e._v("votingparams")])]),e._v(" "),o("h2",{attrs:{id:"votingperiod"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#votingperiod"}},[e._v("#")]),e._v(" "),o("code",[e._v("votingperiod")])]),e._v(" "),o("h3",{attrs:{id:"la-cantidad-maxima-de-tiempo-que-una-propuesta-puede-aceptar-votos-antes-de-que-concluya-el-periodo-de-votacion-en-nanosegundos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#la-cantidad-maxima-de-tiempo-que-una-propuesta-puede-aceptar-votos-antes-de-que-concluya-el-periodo-de-votacion-en-nanosegundos"}},[e._v("#")]),e._v(" La cantidad máxima de tiempo que una propuesta puede aceptar votos antes de que concluya el período de votación, en nanosegundos.")]),e._v(" "),o("h4",{attrs:{id:"cosmoshub-3-por-defecto-1209600000000000-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmoshub-3-por-defecto-1209600000000000-2"}},[e._v("#")]),e._v(" "),o("code",[e._v("cosmoshub-3")]),e._v(" por defecto: "),o("code",[e._v("1209600000000000")])]),e._v(" "),o("p",[e._v("Una vez que una propuesta de gobierno entra en el período de votación, hay un período máximo de tiempo que puede transcurrir antes de que concluya el período de votación. El valor de subkey de este parámetro representa la cantidad máxima de tiempo que la propuesta tiene para aceptar los votos, que actualmente es de "),o("code",[e._v("1209600000000000")]),e._v(" nanosegundos o 14 días. Si la votación de la propuesta no alcanza el quórum (es decir, el 40% del poder de voto de la red participa) antes de este tiempo, se quemarán las cantidades depositadas y el resultado de la propuesta no se considerará válido. Los votantes pueden cambiar su voto tantas veces como quieran antes de que termine el período de votación. Este período de votación es actualmente el mismo para cualquier tipo de propuesta de gobierno.")]),e._v(" "),o("h3",{attrs:{id:"posibles-consecuencias-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posibles-consecuencias-3"}},[e._v("#")]),e._v(" Posibles consecuencias")]),e._v(" "),o("h4",{attrs:{id:"disminucion-del-valor-votingperiod"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disminucion-del-valor-votingperiod"}},[e._v("#")]),e._v(" Disminución del valor "),o("code",[e._v("votingperiod")])]),e._v(" "),o("p",[e._v("La disminución del valor de subkey "),o("code",[e._v("votingperiod")]),e._v(" reducirá el tiempo de votación de las propuestas de gobernanza. Esto podría significar:")]),e._v(" "),o("ol",[o("li",[e._v("disminuir la proporción de la red que participa en la votación, y")]),e._v(" "),o("li",[e._v("disminución de la probabilidad de que se alcance el quórum.")])]),e._v(" "),o("h4",{attrs:{id:"aumentar-el-valor-votingperiod"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aumentar-el-valor-votingperiod"}},[e._v("#")]),e._v(" Aumentar el valor "),o("code",[e._v("votingperiod")])]),e._v(" "),o("p",[e._v("El aumento del valor de subkey "),o("code",[e._v("votingperiod")]),e._v(" aumentará el tiempo de votación de las propuestas de gobernanza. Esto puede:")]),e._v(" "),o("ol",[o("li",[e._v("aumentar la proporción de la red que participa en la votación, y")]),e._v(" "),o("li",[e._v("aumentar la probabilidad de que se alcance el quórum.")])]),e._v(" "),o("h4",{attrs:{id:"observaciones-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#observaciones-2"}},[e._v("#")]),e._v(" Observaciones")]),e._v(" "),o("p",[e._v("Históricamente, los debates y el compromiso fuera de la cadena parecen haber sido mayores durante el período de votación de una propuesta de gobernanza que cuando la propuesta se publica fuera de la cadena como un boceto. En la segunda semana del período de votación se ha votado una cantidad no trivial del poder de voto. Las propuestas 23, 19 y 13 tuvieron cada una aproximadamente un 80% de participación en la red o más.")]),e._v(" "),o("h2",{attrs:{id:"_2-tallyparams"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-tallyparams"}},[e._v("#")]),e._v(" 2. "),o("code",[e._v("tallyparams")])]),e._v(" "),o("h2",{attrs:{id:"quorum"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quorum"}},[e._v("#")]),e._v(" "),o("code",[e._v("quorum")])]),e._v(" "),o("h3",{attrs:{id:"la-proporcion-minima-de-poder-de-voto-de-la-red-que-se-requiere-para-que-el-resultado-de-una-propuesta-de-gobierno-se-considere-valido"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#la-proporcion-minima-de-poder-de-voto-de-la-red-que-se-requiere-para-que-el-resultado-de-una-propuesta-de-gobierno-se-considere-valido"}},[e._v("#")]),e._v(" La proporción mínima de poder de voto de la red que se requiere para que el resultado de una propuesta de gobierno se considere válido.")]),e._v(" "),o("h4",{attrs:{id:"cosmoshub-3-por-defecto-0-400000000000000000"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmoshub-3-por-defecto-0-400000000000000000"}},[e._v("#")]),e._v(" "),o("code",[e._v("cosmoshub-3")]),e._v(" por defecto: "),o("code",[e._v("0.400000000000000000")])]),e._v(" "),o("p",[e._v("Se requiere quórum para que el resultado de la votación de una propuesta de gobierno se considere válido y para que los contribuyentes de depósitos recuperen sus cantidades depositadas, y el valor de subkey de este parámetro representa el valor mínimo para el quórum. El poder de voto, ya sea que respalde un voto de 'yes', 'abstain', 'no', or 'no-with-veto', cuenta para el quórum. Si la votación de la propuesta no alcanza el quórum (es decir, el 40% del poder de voto de la red participa) antes de este momento, se quemará cualquier cantidad depositada y el resultado de la propuesta no se considerará válido.")]),e._v(" "),o("h3",{attrs:{id:"posibles-consecuencias-4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posibles-consecuencias-4"}},[e._v("#")]),e._v(" Posibles consecuencias")]),e._v(" "),o("h4",{attrs:{id:"disminucion-del-valor-quorum"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disminucion-del-valor-quorum"}},[e._v("#")]),e._v(" Disminución del valor "),o("code",[e._v("quorum")])]),e._v(" "),o("p",[e._v("La disminución del valor de subkey "),o("code",[e._v("quorum")]),e._v(" permitirá que una proporción menor de la red legitime el resultado de una propuesta. Esto aumenta el riesgo de que se tome una decisión con una proporción menor de los participantes con ATOMs, al tiempo que disminuye el riesgo de que una propuesta se considere inválida. Esto probablemente disminuirá el riesgo de que el depósito de una propuesta se queme.")]),e._v(" "),o("h4",{attrs:{id:"aumentar-el-valor-quorum"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aumentar-el-valor-quorum"}},[e._v("#")]),e._v(" Aumentar el valor "),o("code",[e._v("quorum")])]),e._v(" "),o("p",[e._v("El aumento del valor de subkey "),o("code",[e._v("quorum")]),e._v(" requerirá una mayor proporción de la red para legitimar el resultado de una propuesta. Esto disminuye el riesgo de que se tome una decisión con una proporción menor de los participantes con ATOMs, al tiempo que aumenta el riesgo de que una propuesta se considere inválida. Es probable que esto aumente el riesgo de que se queme el depósito de una propuesta.")]),e._v(" "),o("h2",{attrs:{id:"threshold"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#threshold"}},[e._v("#")]),e._v(" "),o("code",[e._v("threshold")])]),e._v(" "),o("h3",{attrs:{id:"la-proporcion-minima-del-poder-de-voto-necesario-para-que-se-apruebe-una-propuesta-de-gobierno"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#la-proporcion-minima-del-poder-de-voto-necesario-para-que-se-apruebe-una-propuesta-de-gobierno"}},[e._v("#")]),e._v(" La proporción mínima del poder de voto necesario para que se apruebe una propuesta de gobierno.")]),e._v(" "),o("h4",{attrs:{id:"cosmoshub-3-por-defecto-0-500000000000000000"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmoshub-3-por-defecto-0-500000000000000000"}},[e._v("#")]),e._v(" "),o("code",[e._v("cosmoshub-3")]),e._v(" por defecto: "),o("code",[e._v("0.500000000000000000")])]),e._v(" "),o("p",[e._v("Se requiere una mayoría simple de votos a favor (es decir, el 50% del poder de voto participativo) para que se apruebe una propuesta de gobierno. Aunque es necesario, un voto de mayoría simple 'yes' puede no ser suficiente para aprobar una propuesta en dos escenarios:")]),e._v(" "),o("ol",[o("li",[e._v("No se alcanza un "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#quorum"}},[e._v("quórum")]),e._v(" del 40% de la capacidad de la red o")],1),e._v(" "),o("li",[e._v("Un voto de 'no-with-veto' del 33,4% del poder de voto o mayor.")])]),e._v(" "),o("p",[e._v("Si se aprueba una propuesta de gobernanza, las cantidades depositadas se devuelven a los contribuyentes. Si se aprueba una propuesta basada en texto, nada se promulga automáticamente, pero existe una expectativa social de que los participantes se coordinen para promulgar los compromisos señalados en la propuesta. Si se aprueba una propuesta de cambio de parámetros, el parámetro de protocolo cambiará inmediatamente después de que termine el "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#votingperiod"}},[e._v("período de votación")]),e._v(", y sin necesidad de ejecutar un nuevo software. Si se aprueba una propuesta de gasto comunitario, el saldo de la Reserva Comunitaria disminuirá en el número de ATOMs indicados en la propuesta y la dirección del destinatario aumentará en ese mismo número de ATOMs inmediatamente después de que termine el período de votación.")],1),e._v(" "),o("h3",{attrs:{id:"posibles-consecuencias-5"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posibles-consecuencias-5"}},[e._v("#")]),e._v(" Posibles consecuencias")]),e._v(" "),o("h4",{attrs:{id:"disminucion-del-valor-threshold"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disminucion-del-valor-threshold"}},[e._v("#")]),e._v(" Disminución del valor "),o("code",[e._v("threshold")])]),e._v(" "),o("p",[e._v("La disminución del valor de subkey "),o("code",[e._v("threshold")]),e._v(" disminuirá la proporción del poder de voto necesario para aprobar una propuesta. Esto puede:")]),e._v(" "),o("ol",[o("li",[e._v("aumentará la probabilidad de que una propuesta sea aprobada, y")]),e._v(" "),o("li",[e._v("aumentará la probabilidad de que un grupo minoritario realice cambios en la red.")])]),e._v(" "),o("h4",{attrs:{id:"aumentar-el-valor-threshold"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aumentar-el-valor-threshold"}},[e._v("#")]),e._v(" Aumentar el valor "),o("code",[e._v("threshold")])]),e._v(" "),o("p",[e._v("Aumentar el valor de subkey "),o("code",[e._v("threshold")]),e._v(" aumentará la proporción de poder de voto necesario para aprobar una propuesta. Esto puede:")]),e._v(" "),o("ol",[o("li",[e._v("disminuir la probabilidad de que una propuesta sea aprobada, y")]),e._v(" "),o("li",[e._v("disminuir la probabilidad de que un grupo minoritario realice cambios en la red.")])]),e._v(" "),o("h2",{attrs:{id:"veto"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#veto"}},[e._v("#")]),e._v(" "),o("code",[e._v("veto")])]),e._v(" "),o("h3",{attrs:{id:"la-proporcion-minima-de-poder-de-voto-de-los-participantes-para-vetar-es-decir-rechazar-una-propuesta-de-gobierno"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#la-proporcion-minima-de-poder-de-voto-de-los-participantes-para-vetar-es-decir-rechazar-una-propuesta-de-gobierno"}},[e._v("#")]),e._v(" La proporción mínima de poder de voto de los participantes para vetar (es decir, rechazar) una propuesta de gobierno.")]),e._v(" "),o("h4",{attrs:{id:"cosmoshub-3-por-defecto-0-334000000000000000"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmoshub-3-por-defecto-0-334000000000000000"}},[e._v("#")]),e._v(" "),o("code",[e._v("cosmoshub-3")]),e._v(" por defecto: "),o("code",[e._v("0.334000000000000000")])]),e._v(" "),o("p",[e._v("Aunque se requiere un voto de 'yes' por mayoría simple (es decir, el 50% del poder de voto participante) para que se apruebe una propuesta de gobierno, un voto de 'no-with-veto' del 33,4% del poder de voto participante o superior puede anular este resultado y hacer que la propuesta fracase. Esto permite que un grupo minoritario que represente más de 1/3 del poder de voto pueda hacer fracasar una propuesta que de otro modo sería aprobada.")]),e._v(" "),o("h3",{attrs:{id:"posibles-consecuencias-6"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posibles-consecuencias-6"}},[e._v("#")]),e._v(" Posibles consecuencias")]),e._v(" "),o("h4",{attrs:{id:"disminucion-del-valor-veto"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disminucion-del-valor-veto"}},[e._v("#")]),e._v(" Disminución del valor "),o("code",[e._v("veto")])]),e._v(" "),o("p",[e._v("Disminuir el valor de subkey "),o("code",[e._v("veto")]),e._v(" disminuirá la proporción de poder de voto de los participantes requerida para vetar. Esto puede:")]),e._v(" "),o("ol",[o("li",[e._v("permiten a un grupo minoritario más pequeño evitar que las propuestas sean aprobadas, y")]),e._v(" "),o("li",[e._v("disminuyen la probabilidad de que se aprueben propuestas controvertidas.")])]),e._v(" "),o("h4",{attrs:{id:"aumentar-el-valor-veto"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aumentar-el-valor-veto"}},[e._v("#")]),e._v(" Aumentar el valor "),o("code",[e._v("veto")])]),e._v(" "),o("p",[e._v("Aumentar el valor de subkey "),o("code",[e._v("veto")]),e._v(" aumentará la proporción del poder de voto requerido para vetar. Esto requerirá un grupo minoritario más grande para evitar que las propuestas sean aprobadas, y probablemente aumentará la probabilidad de que se aprueben las propuestas controvertidas.")]),e._v(" "),o("h1",{attrs:{id:"verificar-los-valores-de-los-parametros"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verificar-los-valores-de-los-parametros"}},[e._v("#")]),e._v(" Verificar los valores de los parámetros")]),e._v(" "),o("h2",{attrs:{id:"parametros-de-genesis-aka-lanzamiento"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parametros-de-genesis-aka-lanzamiento"}},[e._v("#")]),e._v(" Parámetros de Génesis (aka lanzamiento)")]),e._v(" "),o("p",[e._v("Esto es útil si no tienes "),o("code",[e._v("gaiad")]),e._v(" instalado y no tienes una razón para creer que el parámetro ha cambiado desde que se lanzó la cadena.")]),e._v(" "),o("p",[e._v("Cada parámetro puede ser verificado en el archivo génesis de la cadena, que encuentra "),o("a",{attrs:{href:"https://raw.githubusercontent.com/cosmos/launch/master/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("aquí"),o("OutboundLink")],1),e._v(". Estos son los parámetros con los que la última cadena del Hub de Cosmos se lanzó, y seguirá haciéndolo, a menos que una propuesta de gobierno los cambie. He resumido esos valores originales en la sección "),o("RouterLink",{attrs:{to:"/governance/params-change/params-change/Governance.html#technical-specifications"}},[e._v("Especificaciones Técnicas")]),e._v(".")],1),e._v(" "),o("p",[e._v("El archivo génesis contiene texto y es grande. El esquema de nombres de los parámetros de génesis no es idéntico a los de la lista anterior, así que cuando busco, pongo un guión bajo entre los caracteres en mayúsculas y minúsculas, y luego convierto todos los caracteres a minúsculas.")]),e._v(" "),o("p",[e._v("Por ejemplo, si quiero buscar "),o("code",[e._v("depositparams")]),e._v(", buscaré en el "),o("a",{attrs:{href:"https://raw.githubusercontent.com/cosmos/launch/master/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("génesis"),o("OutboundLink")],1),e._v(" "),o("code",[e._v("deposit_params")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"parametros-actuales"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parametros-actuales"}},[e._v("#")]),e._v(" Parámetros actuales")]),e._v(" "),o("p",[e._v("Puede verificar los valores actuales de los parámetros (en caso de que hayan sido modificados mediante la propuesta de gobierno posterior al lanzamiento) con la aplicación de "),o("a",{attrs:{href:"params-change/gaiad"}},[e._v("línea de comandos gaiad")]),e._v(". Aquí están los comandos para cada uno:")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("depositparams")]),e._v(" - "),o("code",[e._v("gaiad q ..")]),e._v(" --\x3e "),o("strong",[e._v("to do")]),e._v(" <--")])]),e._v(" "),o("h2",{attrs:{id:"futuro"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#futuro"}},[e._v("#")]),e._v(" Futuro")]),e._v(" "),o("p",[e._v("La documentación actual sólo describe el producto mínimo viable para el módulo de gobernanza. Las mejoras futuras pueden incluir:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[o("code",[e._v("BountyProposals")]),e._v(":")]),e._v(" Si es aceptada, un "),o("code",[e._v("BountyProposal")]),e._v(" crea una recompensa abierta. El "),o("code",[e._v("BountyProposal")]),e._v(" especifica cuántos átomos se entregarán al finalizar. Estos átomos serán tomados del "),o("code",[e._v("reserve pool")]),e._v(". Después de que un "),o("code",[e._v("BountyProposal")]),e._v(" es aceptado por el gobierno, cualquiera puede presentar un "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" con el código para reclamar la recompensa. Tenga en cuenta que una vez que el "),o("code",[e._v("BountyProposal")]),e._v(" es aceptado, los fondos correspondientes en la "),o("code",[e._v("reserve pool")]),e._v(" se bloquean para que el pago siempre pueda ser cumplido. Para vincular un "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" con una recompensa abierta, el remitente del "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" utilizará el atributo "),o("code",[e._v("Proposal.LinkedProposal")]),e._v(". Si un "),o("code",[e._v("SoftwareUpgradeProposal")]),e._v(" vinculado a una recompensa abierta es aceptado por la administración, los fondos reservados se transfieren automáticamente al autor de la propuesta.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Complex delegation:")]),e._v(" Los delegadores podrán elegir otros representantes además de sus validadores. En última instancia, la cadena de representantes siempre terminaría en un validador, pero los delegadores podrían heredar el voto de su representante elegido antes de heredar el voto de su validador. En otras palabras, sólo heredarían el voto de su validador si su otro representante designado no votara.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Mejor proceso de revisión de propuestas:")]),e._v(" La propuesta consta de dos partes de "),o("code",[e._v("proposal.Deposit")]),e._v(", uno para la lucha contra el correo basura (igual que en el MVP) y otro para recompensar a los auditores de terceros.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/x/gov/spec/05_future_improvements.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("origen"),o("OutboundLink")],1)])])]),e._v(" "),o("h1",{attrs:{id:"especificaciones-tecnicas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#especificaciones-tecnicas"}},[e._v("#")]),e._v(" Especificaciones técnicas")]),e._v(" "),o("p",[e._v("El módulo "),o("code",[e._v("gov")]),e._v(" es responsable del sistema de gobierno de la cadena. En este sistema, los titulares del token nativo de la cadena pueden votar sobre las propuestas en una base de 1-token, 1-voto. A continuación hay una lista de las características que el módulo apoya actualmente:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Entrega de propuestas")]),e._v(": Los usuarios pueden presentar propuestas con un depósito. Una vez que se alcanza el depósito mínimo, la propuesta entra en el período de votación.")]),e._v(" "),o("li",[o("strong",[e._v("Voto")]),e._v(": Los participantes pueden votar sobre las propuestas que llegaron a "),o("code",[e._v("MinDeposit")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Herencia y sanciones")]),e._v(": Los delegadores heredan su voto de validación si no votan ellos mismos.")]),e._v(" "),o("li",[o("strong",[e._v("Reclamación del depósito")]),e._v(": Los usuarios que depositaron en las propuestas pueden recuperar sus depósitos si la propuesta fue aceptada O si la propuesta nunca entró en el período de votación.")])]),e._v(" "),o("p",[e._v("El módulo "),o("code",[e._v("gov")]),e._v(" contiene los siguientes parámetros:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Key")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("cosmoshub-3 genesis setting")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("depositparams")]),e._v(" "),o("td",[e._v("object")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('{"min_deposit":[{"denom":"uatom","amount":"512000000"}],"max_deposit_period":"1209600000000000"}')])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Subkeys")])]),e._v(" "),o("td"),e._v(" "),o("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),o("tr",[o("td",[e._v("min_deposit")]),e._v(" "),o("td",[e._v("array (coins)")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('[{"denom":"uatom","amount":"512000000"}]')])]),e._v(" "),o("tr",[o("td",[e._v("max_deposit_period")]),e._v(" "),o("td",[e._v("string (time ns)")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('"1209600000000000"')])])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Key")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("cosmoshub-3 genesis setting")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("votingparams")]),e._v(" "),o("td",[e._v("object")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Subkey")])]),e._v(" "),o("td"),e._v(" "),o("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),o("tr",[o("td",[e._v("voting_period")]),e._v(" "),o("td",[e._v("string (time ns)")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('"1209600000000000"')])])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Key")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("cosmoshub-3 genesis setting")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("depositparams")]),e._v(" "),o("td",[e._v("object")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('{"min_deposit":[{"denom":"uatom","amount":"512000000"}],"max_deposit_period":"1209600000000000"}')])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Subkeys")])]),e._v(" "),o("td"),e._v(" "),o("td",{staticStyle:{"text-align":"left"}})]),e._v(" "),o("tr",[o("td",[e._v("quorum")]),e._v(" "),o("td",[e._v("string (dec)")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('"0.400000000000000000"')])]),e._v(" "),o("tr",[o("td",[e._v("threshold")]),e._v(" "),o("td",[e._v("string (dec)")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('"0.500000000000000000"')])]),e._v(" "),o("tr",[o("td",[e._v("veto")]),e._v(" "),o("td",[e._v("string (dec)")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v('"0.334000000000000000"')])])])]),e._v(" "),o("p",[o("strong",[e._v("Observación")]),e._v(": El módulo de gobierno contiene parámetros que son objetos que no son como los demás módulos. Si sólo se desea modificar un subconjunto de parámetros, sólo hay que incluirlos y no toda la estructura de objetos de parámetros.")])])}),[],!1,null,null,null);a.default=s.exports}}]);