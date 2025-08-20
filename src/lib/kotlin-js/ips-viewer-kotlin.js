(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.moreinformatics.ipsviewer:ips-viewer-kotlin'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.moreinformatics.ipsviewer:ips-viewer-kotlin'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'com.moreinformatics.ipsviewer:ips-viewer-kotlin'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'com.moreinformatics.ipsviewer:ips-viewer-kotlin'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'com.moreinformatics.ipsviewer:ips-viewer-kotlin'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'com.moreinformatics.ipsviewer:ips-viewer-kotlin'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'com.moreinformatics.ipsviewer:ips-viewer-kotlin'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' is loaded prior to 'com.moreinformatics.ipsviewer:ips-viewer-kotlin'.");
    }
    root['com.moreinformatics.ipsviewer:ips-viewer-kotlin'] = factory(typeof this['com.moreinformatics.ipsviewer:ips-viewer-kotlin'] === 'undefined' ? {} : this['com.moreinformatics.ipsviewer:ips-viewer-kotlin'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlinx-serialization-kotlinx-serialization-json'], this['Kotlin-DateTime-library-kotlinx-datetime-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_datetime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.p9;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var isInterface = kotlin_kotlin.$_$.w6;
  var VOID = kotlin_kotlin.$_$.e;
  var firstOrNull = kotlin_kotlin.$_$.v4;
  var joinToString = kotlin_kotlin.$_$.b5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Unit_instance = kotlin_kotlin.$_$.o3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var Exception = kotlin_kotlin.$_$.y8;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var emptyMap = kotlin_kotlin.$_$.s4;
  var first = kotlin_kotlin.$_$.w4;
  var emptyList = kotlin_kotlin.$_$.r4;
  var protoOf = kotlin_kotlin.$_$.h7;
  var classMeta = kotlin_kotlin.$_$.g6;
  var setMetadataFor = kotlin_kotlin.$_$.i7;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var objectMeta = kotlin_kotlin.$_$.g7;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var objectCreate = kotlin_kotlin.$_$.f7;
  var hashCode = kotlin_kotlin.$_$.m6;
  var getBooleanHashCode = kotlin_kotlin.$_$.j6;
  var equals = kotlin_kotlin.$_$.h6;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var getStringHashCode = kotlin_kotlin.$_$.l6;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.w9;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var Enum = kotlin_kotlin.$_$.x8;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var listOf = kotlin_kotlin.$_$.i5;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var to = kotlin_kotlin.$_$.aa;
  var mapOf = kotlin_kotlin.$_$.j5;
  var listOfNotNull = kotlin_kotlin.$_$.g5;
  var isCharSequence = kotlin_kotlin.$_$.s6;
  var trim = kotlin_kotlin.$_$.s8;
  var toString = kotlin_kotlin.$_$.m7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var isBlank = kotlin_kotlin.$_$.z7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h1;
  var padStart = kotlin_kotlin.$_$.c8;
  var contains = kotlin_kotlin.$_$.w7;
  var charArrayOf = kotlin_kotlin.$_$.b6;
  var split = kotlin_kotlin.$_$.e8;
  var lastOrNull = kotlin_kotlin.$_$.e5;
  var println = kotlin_kotlin.$_$.x5;
  var filterNotNull = kotlin_kotlin.$_$.u4;
  var listOf_0 = kotlin_kotlin.$_$.h5;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.e3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  //endregion
  //region block: pre-declaration
  setMetadataFor(IpsProcessor, 'IpsProcessor', classMeta, VOID, VOID, IpsProcessor);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(IpsContent, 'IpsContent', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ProcessedResource, 'ProcessedResource', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ResourceDisplayData, 'ResourceDisplayData', classMeta, VOID, VOID, ResourceDisplayData, VOID, {0: $serializer_getInstance_1});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Badge, 'Badge', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Companion_3, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(BadgeColor, 'BadgeColor', classMeta, Enum, VOID, VOID, VOID, {0: Companion_getInstance_5});
  setMetadataFor(Companion_4, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(BadgeVariant, 'BadgeVariant', classMeta, Enum, VOID, VOID, VOID, {0: Companion_getInstance_6});
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(IpsProcessingResult, 'IpsProcessingResult', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(IpsProcessingConfig, 'IpsProcessingConfig', classMeta, VOID, VOID, IpsProcessingConfig, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(Companion_7, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(ProcessingMode, 'ProcessingMode', classMeta, Enum, VOID, VOID, VOID, {0: Companion_getInstance_9});
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Bundle, 'Bundle', classMeta, VOID, VOID, Bundle, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(BundleEntry, 'BundleEntry', classMeta, VOID, VOID, BundleEntry, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor($serializer_7, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Resource, 'Resource', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor($serializer_8, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Composition, 'Composition', classMeta, VOID, VOID, Composition, VOID, {0: $serializer_getInstance_8});
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor($serializer_9, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(CompositionSection, 'CompositionSection', classMeta, VOID, VOID, CompositionSection, VOID, {0: $serializer_getInstance_9});
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor($serializer_10, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Reference, 'Reference', classMeta, VOID, VOID, Reference, VOID, {0: $serializer_getInstance_10});
  setMetadataFor(Companion_14, 'Companion', objectMeta);
  setMetadataFor($serializer_11, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(CodeableConcept, 'CodeableConcept', classMeta, VOID, VOID, CodeableConcept, VOID, {0: $serializer_getInstance_11});
  setMetadataFor(Companion_15, 'Companion', objectMeta);
  setMetadataFor($serializer_12, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Coding, 'Coding', classMeta, VOID, VOID, Coding, VOID, {0: $serializer_getInstance_12});
  setMetadataFor(Companion_16, 'Companion', objectMeta);
  setMetadataFor($serializer_13, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Narrative, 'Narrative', classMeta, VOID, VOID, Narrative, VOID, {0: $serializer_getInstance_13});
  setMetadataFor(Companion_17, 'Companion', objectMeta);
  setMetadataFor($serializer_14, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Patient, 'Patient', classMeta, VOID, VOID, Patient, VOID, {0: $serializer_getInstance_14});
  setMetadataFor(Companion_18, 'Companion', objectMeta);
  setMetadataFor($serializer_15, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(HumanName, 'HumanName', classMeta, VOID, VOID, HumanName, VOID, {0: $serializer_getInstance_15});
  setMetadataFor(Companion_19, 'Companion', objectMeta);
  setMetadataFor($serializer_16, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ContactPoint, 'ContactPoint', classMeta, VOID, VOID, ContactPoint, VOID, {0: $serializer_getInstance_16});
  setMetadataFor(Companion_20, 'Companion', objectMeta);
  setMetadataFor($serializer_17, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Address, 'Address', classMeta, VOID, VOID, Address, VOID, {0: $serializer_getInstance_17});
  setMetadataFor(Companion_21, 'Companion', objectMeta);
  setMetadataFor($serializer_18, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(PatientContact, 'PatientContact', classMeta, VOID, VOID, PatientContact, VOID, {0: $serializer_getInstance_18});
  setMetadataFor(Companion_22, 'Companion', objectMeta);
  setMetadataFor($serializer_19, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(AllergyIntolerance, 'AllergyIntolerance', classMeta, VOID, VOID, AllergyIntolerance, VOID, {0: $serializer_getInstance_19});
  setMetadataFor(Companion_23, 'Companion', objectMeta);
  setMetadataFor($serializer_20, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(AllergyIntoleranceReaction, 'AllergyIntoleranceReaction', classMeta, VOID, VOID, AllergyIntoleranceReaction, VOID, {0: $serializer_getInstance_20});
  setMetadataFor(Companion_24, 'Companion', objectMeta);
  setMetadataFor($serializer_21, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Condition, 'Condition', classMeta, VOID, VOID, Condition, VOID, {0: $serializer_getInstance_21});
  setMetadataFor(Companion_25, 'Companion', objectMeta);
  setMetadataFor($serializer_22, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Annotation, 'Annotation', classMeta, VOID, VOID, Annotation, VOID, {0: $serializer_getInstance_22});
  setMetadataFor(EnhancedIpsProcessor, 'EnhancedIpsProcessor', classMeta, VOID, VOID, EnhancedIpsProcessor);
  setMetadataFor(Companion_26, 'Companion', objectMeta);
  setMetadataFor($serializer_23, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ComponentView, 'ComponentView', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  setMetadataFor(Companion_27, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(ComponentType, 'ComponentType', classMeta, Enum, VOID, VOID, VOID, {0: Companion_getInstance_29});
  setMetadataFor(Companion_28, 'Companion', objectMeta);
  setMetadataFor($serializer_24, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ComponentProps, 'ComponentProps', classMeta, VOID, VOID, ComponentProps, VOID, {0: $serializer_getInstance_24});
  setMetadataFor(Companion_29, 'Companion', objectMeta);
  setMetadataFor($serializer_25, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(EnhancedResourceDisplay, 'EnhancedResourceDisplay', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  setMetadataFor(Companion_30, 'Companion', objectMeta);
  setMetadataFor($serializer_26, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(EnhancedSectionContent, 'EnhancedSectionContent', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  setMetadataFor(Companion_31, 'Companion', objectMeta);
  setMetadataFor($serializer_27, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(IpsRenderingResult, 'IpsRenderingResult', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
  setMetadataFor(Companion_32, 'Companion', objectMeta);
  setMetadataFor($serializer_28, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RenderingConfig, 'RenderingConfig', classMeta, VOID, VOID, RenderingConfig, VOID, {0: $serializer_getInstance_28});
  setMetadataFor(Companion_33, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(RenderingMode, 'RenderingMode', classMeta, Enum, VOID, VOID, VOID, {0: Companion_getInstance_35});
  setMetadataFor(Companion_34, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(TargetPlatform, 'TargetPlatform', classMeta, Enum, VOID, VOID, VOID, {0: Companion_getInstance_36});
  setMetadataFor(Companion_35, 'Companion', objectMeta, VOID, [SerializerFactory]);
  setMetadataFor(RenderingTheme, 'RenderingTheme', classMeta, Enum, VOID, VOID, VOID, {0: Companion_getInstance_37});
  setMetadataFor(ResourceRenderer, 'ResourceRenderer', classMeta);
  setMetadataFor(PatientRenderer, 'PatientRenderer', classMeta, ResourceRenderer, VOID, PatientRenderer);
  setMetadataFor(AllergyIntoleranceRenderer, 'AllergyIntoleranceRenderer', classMeta, ResourceRenderer, VOID, AllergyIntoleranceRenderer);
  setMetadataFor(ConditionRenderer, 'ConditionRenderer', classMeta, ResourceRenderer, VOID, ConditionRenderer);
  setMetadataFor(MedicationRenderer, 'MedicationRenderer', classMeta, ResourceRenderer, VOID, MedicationRenderer);
  setMetadataFor(IpsViewerJS, 'IpsViewerJS', classMeta, VOID, VOID, IpsViewerJS);
  //endregion
  function processPatientResource($this, entry) {
    var tmp0_elvis_lhs = entry.x19_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resource = tmp;
    if (!(resource.y19_1 === 'Patient'))
      return null;
    var patient = parsePatientFromResource($this, resource);
    var tmp_0 = formatPatientName($this, patient);
    var tmp_1 = buildPatientDetails($this, patient);
    var tmp_2;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp_2 = this_0.dy(tmp$ret$1, resource);
    } else {
      tmp_2 = null;
    }
    var displayData = new ResourceDisplayData(tmp_0, VOID, VOID, tmp_1, VOID, tmp_2);
    return new ProcessedResource('Patient', resource.z19_1, displayData);
  }
  function processResourceEntry($this, entry) {
    var tmp0_elvis_lhs = entry.x19_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resource = tmp;
    var displayData;
    switch (resource.y19_1) {
      case 'AllergyIntolerance':
        displayData = processAllergyIntolerance($this, resource);
        break;
      case 'Condition':
        displayData = processCondition($this, resource);
        break;
      case 'MedicationRequest':
        displayData = processMedicationRequest($this, resource);
        break;
      case 'MedicationStatement':
        displayData = processMedicationStatement($this, resource);
        break;
      case 'Observation':
        displayData = processObservation($this, resource);
        break;
      case 'Procedure':
        displayData = processProcedure($this, resource);
        break;
      case 'Immunization':
        displayData = processImmunization($this, resource);
        break;
      default:
        displayData = processGenericResource($this, resource);
        break;
    }
    return new ProcessedResource(resource.y19_1, resource.z19_1, displayData);
  }
  function formatPatientName($this, patient) {
    var tmp1_safe_receiver = patient == null ? null : patient.i1a_1;
    var name = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
    if (name == null)
      return 'Unknown Patient';
    var tmp2_safe_receiver = name.o1a_1;
    var tmp = tmp2_safe_receiver == null ? null : joinToString(tmp2_safe_receiver, ' ');
    var tmp3_safe_receiver = name.p1a_1;
    return joinNonEmpty([tmp, tmp3_safe_receiver == null ? null : joinToString(tmp3_safe_receiver, ' '), name.q1a_1]);
  }
  function buildPatientDetails($this, patient) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var details = LinkedHashMap_init_$Create$();
    var tmp1_safe_receiver = patient == null ? null : patient.j1a_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var key = 'Birth Date';
      var value = formatDate(tmp1_safe_receiver);
      details.n1(key, value);
    }
    var tmp3_safe_receiver = patient == null ? null : patient.k1a_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      details.n1('Gender', tmp3_safe_receiver);
    }
    return details;
  }
  function processAllergyIntolerance($this, resource) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var badges = ArrayList_init_$Create$();
    badges.m(new Badge('Allergy', BadgeColor_WARNING_getInstance()));
    var tmp;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.dy(tmp$ret$2, resource);
    } else {
      tmp = null;
    }
    return new ResourceDisplayData('Allergy/Intolerance', VOID, badges, VOID, VOID, tmp);
  }
  function processCondition($this, resource) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var badges = ArrayList_init_$Create$();
    badges.m(new Badge('Condition', BadgeColor_INFO_getInstance()));
    var tmp;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.dy(tmp$ret$2, resource);
    } else {
      tmp = null;
    }
    return new ResourceDisplayData('Medical Condition', VOID, badges, VOID, VOID, tmp);
  }
  function processMedicationRequest($this, resource) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var badges = ArrayList_init_$Create$();
    badges.m(new Badge('Medication', BadgeColor_PRIMARY_getInstance()));
    var tmp;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.dy(tmp$ret$2, resource);
    } else {
      tmp = null;
    }
    return new ResourceDisplayData('Medication Request', VOID, badges, VOID, VOID, tmp);
  }
  function processMedicationStatement($this, resource) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var badges = ArrayList_init_$Create$();
    badges.m(new Badge('Medication', BadgeColor_PRIMARY_getInstance()));
    var tmp;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.dy(tmp$ret$2, resource);
    } else {
      tmp = null;
    }
    return new ResourceDisplayData('Medication Statement', VOID, badges, VOID, VOID, tmp);
  }
  function processObservation($this, resource) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var badges = ArrayList_init_$Create$();
    badges.m(new Badge('Observation', BadgeColor_SUCCESS_getInstance()));
    var tmp;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.dy(tmp$ret$2, resource);
    } else {
      tmp = null;
    }
    return new ResourceDisplayData('Observation', VOID, badges, VOID, VOID, tmp);
  }
  function processProcedure($this, resource) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var badges = ArrayList_init_$Create$();
    badges.m(new Badge('Procedure', BadgeColor_SECONDARY_getInstance()));
    var tmp;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.dy(tmp$ret$2, resource);
    } else {
      tmp = null;
    }
    return new ResourceDisplayData('Procedure', VOID, badges, VOID, VOID, tmp);
  }
  function processImmunization($this, resource) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var badges = ArrayList_init_$Create$();
    badges.m(new Badge('Immunization', BadgeColor_SUCCESS_getInstance()));
    var tmp;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.dy(tmp$ret$2, resource);
    } else {
      tmp = null;
    }
    return new ResourceDisplayData('Immunization', VOID, badges, VOID, VOID, tmp);
  }
  function processGenericResource($this, resource) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var badges = ArrayList_init_$Create$();
    badges.m(new Badge(resource.y19_1, BadgeColor_LIGHT_getInstance()));
    var tmp;
    if ($this.b1a_1.e1a_1) {
      // Inline function 'kotlinx.serialization.encodeToString' call
      var this_0 = $this.c1a_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Resource), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.dy(tmp$ret$2, resource);
    } else {
      tmp = null;
    }
    return new ResourceDisplayData(resource.y19_1, VOID, badges, VOID, VOID, tmp);
  }
  function parsePatientFromResource($this, resource) {
    var tmp;
    try {
      tmp = null;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function IpsProcessor$json$lambda($this$Json) {
    $this$Json.xy_1 = true;
    $this$Json.az_1 = true;
    return Unit_instance;
  }
  function IpsProcessor(config) {
    config = config === VOID ? new IpsProcessingConfig() : config;
    this.b1a_1 = config;
    var tmp = this;
    tmp.c1a_1 = Json(VOID, IpsProcessor$json$lambda);
  }
  protoOf(IpsProcessor).r1a = function (bundle) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var content = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var warnings = ArrayList_init_$Create$();
    try {
      var tmp0_safe_receiver = bundle.u1a_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_safe_receiver.p();
        while (tmp0_iterator.q()) {
          var element = tmp0_iterator.r();
          // Inline function 'com.moreinformatics.ipsviewer.core.IpsProcessor.processBundle.<anonymous>' call
          var tmp0_safe_receiver_0 = element.x19_1;
          if ((tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.y19_1) === 'Composition') {
            destination.m(element);
          }
        }
        tmp = destination;
      }
      var compositions = tmp;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (compositions == null ? true : compositions.v()) {
        errors.m('No Composition resource found in bundle');
        return new IpsProcessingResult(emptyMap(), errors, warnings);
      }
      var tmp1_safe_receiver = bundle.u1a_1;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination_0 = ArrayList_init_$Create$();
        var tmp0_iterator_0 = tmp1_safe_receiver.p();
        while (tmp0_iterator_0.q()) {
          var element_0 = tmp0_iterator_0.r();
          // Inline function 'com.moreinformatics.ipsviewer.core.IpsProcessor.processBundle.<anonymous>' call
          var tmp0_safe_receiver_1 = element_0.x19_1;
          if ((tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.y19_1) === 'Patient') {
            destination_0.m(element_0);
          }
        }
        tmp_0 = destination_0;
      }
      var patients = tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(patients == null ? true : patients.v())) {
        // Inline function 'kotlin.collections.set' call
        var tmp_1 = new CompositionSection();
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination_1 = ArrayList_init_$Create$();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = patients.p();
        while (tmp0_iterator_1.q()) {
          var element_1 = tmp0_iterator_1.r();
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
          // Inline function 'com.moreinformatics.ipsviewer.core.IpsProcessor.processBundle.<anonymous>' call
          var tmp0_safe_receiver_2 = processPatientResource(this, element_1);
          if (tmp0_safe_receiver_2 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            destination_1.m(tmp0_safe_receiver_2);
          }
        }
        var value = new IpsContent(tmp_1, destination_1, false);
        content.n1('Patient', value);
      }
      var tmp_2 = first(compositions).x19_1;
      var composition = tmp_2 instanceof Composition ? tmp_2 : null;
      var tmp3_safe_receiver = composition == null ? null : composition.z1a_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_2 = tmp3_safe_receiver.p();
        while (tmp0_iterator_2.q()) {
          var element_2 = tmp0_iterator_2.r();
          // Inline function 'com.moreinformatics.ipsviewer.core.IpsProcessor.processBundle.<anonymous>' call
          var tmp3_elvis_lhs = element_2.a1b_1;
          var tmp_3;
          if (tmp3_elvis_lhs == null) {
            var tmp0_safe_receiver_3 = element_2.b1b_1;
            var tmp1_safe_receiver_0 = tmp0_safe_receiver_3 == null ? null : tmp0_safe_receiver_3.e1b_1;
            var tmp2_safe_receiver = tmp1_safe_receiver_0 == null ? null : firstOrNull(tmp1_safe_receiver_0);
            tmp_3 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i1b_1;
          } else {
            tmp_3 = tmp3_elvis_lhs;
          }
          var tmp4_elvis_lhs = tmp_3;
          var title = tmp4_elvis_lhs == null ? '[Untitled section]' : tmp4_elvis_lhs;
          var tmp5_safe_receiver = element_2.d1b_1;
          var tmp_4;
          if (tmp5_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.collections.mapNotNull' call
            // Inline function 'kotlin.collections.mapNotNullTo' call
            var destination_2 = ArrayList_init_$Create$();
            // Inline function 'kotlin.collections.forEach' call
            var tmp0_iterator_3 = tmp5_safe_receiver.p();
            while (tmp0_iterator_3.q()) {
              var element_3 = tmp0_iterator_3.r();
              // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
              // Inline function 'com.moreinformatics.ipsviewer.core.IpsProcessor.processBundle.<anonymous>.<anonymous>' call
              var tmp0_safe_receiver_4 = element_3.j1b_1;
              var tmp_5;
              if (tmp0_safe_receiver_4 == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'com.moreinformatics.ipsviewer.core.IpsProcessor.processBundle.<anonymous>.<anonymous>.<anonymous>' call
                var tmp0_elvis_lhs = bundle.u1a_1;
                var tmp1_safe_receiver_1 = getEntry(tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs, tmp0_safe_receiver_4);
                var tmp_6;
                if (tmp1_safe_receiver_1 == null) {
                  tmp_6 = null;
                } else {
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'com.moreinformatics.ipsviewer.core.IpsProcessor.processBundle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  tmp_6 = processResourceEntry(this, tmp1_safe_receiver_1);
                }
                tmp_5 = tmp_6;
              }
              var tmp0_safe_receiver_5 = tmp_5;
              if (tmp0_safe_receiver_5 == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                destination_2.m(tmp0_safe_receiver_5);
              }
            }
            tmp_4 = destination_2;
          }
          var tmp6_elvis_lhs = tmp_4;
          var sectionEntries = tmp6_elvis_lhs == null ? emptyList() : tmp6_elvis_lhs;
          // Inline function 'kotlin.collections.set' call
          var value_0 = new IpsContent(element_2, sectionEntries, this.b1a_1.d1a_1.equals(ProcessingMode_TEXT_getInstance()) ? true : sectionEntries.v());
          content.n1(title, value_0);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        errors.m('Error processing bundle: ' + e.message);
      } else {
        throw $p;
      }
    }
    return new IpsProcessingResult(content, errors, warnings);
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l1b_1 = [null, new ArrayListSerializer($serializer_getInstance_0()), null];
  }
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.core.IpsContent', this, 3);
    tmp0_serialDesc.ro('section', false);
    tmp0_serialDesc.ro('entries', false);
    tmp0_serialDesc.ro('useText', false);
    this.m1b_1 = tmp0_serialDesc;
  }
  protoOf($serializer).de = function () {
    return this.m1b_1;
  };
  protoOf($serializer).gp = function () {
    var tmp0_cached = Companion_getInstance_1().l1b_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_9(), tmp0_cached[1], BooleanSerializer_getInstance()];
  };
  protoOf($serializer).fe = function (decoder) {
    var tmp0_desc = this.m1b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_input = decoder.eh(tmp0_desc);
    var tmp8_cached = Companion_getInstance_1().l1b_1;
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.qh(tmp0_desc, 0, $serializer_getInstance_9(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.qh(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.gh(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.qh(tmp0_desc, 0, $serializer_getInstance_9(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.qh(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.gh(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return IpsContent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).n1b = function (encoder, value) {
    var tmp0_desc = this.m1b_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().l1b_1;
    tmp1_output.vi(tmp0_desc, 0, $serializer_getInstance_9(), value.o1b_1);
    tmp1_output.vi(tmp0_desc, 1, tmp2_cached[1], value.p1b_1);
    tmp1_output.li(tmp0_desc, 2, value.q1b_1);
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer).ee = function (encoder, value) {
    return this.n1b(encoder, value instanceof IpsContent ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function IpsContent_init_$Init$(seen1, section, entries, useText, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance().m1b_1);
    }
    $this.o1b_1 = section;
    $this.p1b_1 = entries;
    $this.q1b_1 = useText;
    return $this;
  }
  function IpsContent_init_$Create$(seen1, section, entries, useText, serializationConstructorMarker) {
    return IpsContent_init_$Init$(seen1, section, entries, useText, serializationConstructorMarker, objectCreate(protoOf(IpsContent)));
  }
  function IpsContent(section, entries, useText) {
    Companion_getInstance_1();
    this.o1b_1 = section;
    this.p1b_1 = entries;
    this.q1b_1 = useText;
  }
  protoOf(IpsContent).toString = function () {
    return 'IpsContent(section=' + this.o1b_1 + ', entries=' + this.p1b_1 + ', useText=' + this.q1b_1 + ')';
  };
  protoOf(IpsContent).hashCode = function () {
    var result = this.o1b_1.hashCode();
    result = imul(result, 31) + hashCode(this.p1b_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q1b_1) | 0;
    return result;
  };
  protoOf(IpsContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IpsContent))
      return false;
    var tmp0_other_with_cast = other instanceof IpsContent ? other : THROW_CCE();
    if (!this.o1b_1.equals(tmp0_other_with_cast.o1b_1))
      return false;
    if (!equals(this.p1b_1, tmp0_other_with_cast.p1b_1))
      return false;
    if (!(this.q1b_1 === tmp0_other_with_cast.q1b_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.core.ProcessedResource', this, 3);
    tmp0_serialDesc.ro('resourceType', false);
    tmp0_serialDesc.ro('id', true);
    tmp0_serialDesc.ro('displayData', false);
    this.r1b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).de = function () {
    return this.r1b_1;
  };
  protoOf($serializer_0).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), $serializer_getInstance_1()];
  };
  protoOf($serializer_0).fe = function (decoder) {
    var tmp0_desc = this.r1b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.qh(tmp0_desc, 2, $serializer_getInstance_1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.qh(tmp0_desc, 2, $serializer_getInstance_1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return ProcessedResource_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).s1b = function (encoder, value) {
    var tmp0_desc = this.r1b_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    tmp1_output.ti(tmp0_desc, 0, value.t1b_1);
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.u1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.u1b_1);
    }
    tmp1_output.vi(tmp0_desc, 2, $serializer_getInstance_1(), value.v1b_1);
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_0).ee = function (encoder, value) {
    return this.s1b(encoder, value instanceof ProcessedResource ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function ProcessedResource_init_$Init$(seen1, resourceType, id, displayData, serializationConstructorMarker, $this) {
    if (!(5 === (5 & seen1))) {
      throwMissingFieldException(seen1, 5, $serializer_getInstance_0().r1b_1);
    }
    $this.t1b_1 = resourceType;
    if (0 === (seen1 & 2))
      $this.u1b_1 = null;
    else
      $this.u1b_1 = id;
    $this.v1b_1 = displayData;
    return $this;
  }
  function ProcessedResource_init_$Create$(seen1, resourceType, id, displayData, serializationConstructorMarker) {
    return ProcessedResource_init_$Init$(seen1, resourceType, id, displayData, serializationConstructorMarker, objectCreate(protoOf(ProcessedResource)));
  }
  function ProcessedResource(resourceType, id, displayData) {
    id = id === VOID ? null : id;
    this.t1b_1 = resourceType;
    this.u1b_1 = id;
    this.v1b_1 = displayData;
  }
  protoOf(ProcessedResource).toString = function () {
    return 'ProcessedResource(resourceType=' + this.t1b_1 + ', id=' + this.u1b_1 + ', displayData=' + this.v1b_1 + ')';
  };
  protoOf(ProcessedResource).hashCode = function () {
    var result = getStringHashCode(this.t1b_1);
    result = imul(result, 31) + (this.u1b_1 == null ? 0 : getStringHashCode(this.u1b_1)) | 0;
    result = imul(result, 31) + this.v1b_1.hashCode() | 0;
    return result;
  };
  protoOf(ProcessedResource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProcessedResource))
      return false;
    var tmp0_other_with_cast = other instanceof ProcessedResource ? other : THROW_CCE();
    if (!(this.t1b_1 === tmp0_other_with_cast.t1b_1))
      return false;
    if (!(this.u1b_1 == tmp0_other_with_cast.u1b_1))
      return false;
    if (!this.v1b_1.equals(tmp0_other_with_cast.v1b_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w1b_1 = [null, null, new ArrayListSerializer($serializer_getInstance_2()), new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), null];
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.core.ResourceDisplayData', this, 6);
    tmp0_serialDesc.ro('title', true);
    tmp0_serialDesc.ro('subtitle', true);
    tmp0_serialDesc.ro('badges', true);
    tmp0_serialDesc.ro('details', true);
    tmp0_serialDesc.ro('additionalInfo', true);
    tmp0_serialDesc.ro('rawJson', true);
    this.x1b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).de = function () {
    return this.x1b_1;
  };
  protoOf($serializer_1).gp = function () {
    var tmp0_cached = Companion_getInstance_3().w1b_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[2], tmp0_cached[3], tmp0_cached[4], get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_1).fe = function (decoder) {
    var tmp0_desc = this.x1b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.eh(tmp0_desc);
    var tmp11_cached = Companion_getInstance_3().w1b_1;
    if (tmp10_input.uh()) {
      tmp4_local0 = tmp10_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.qh(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.qh(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.qh(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.sh(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.qh(tmp0_desc, 2, tmp11_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.qh(tmp0_desc, 3, tmp11_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.qh(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.sh(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.fh(tmp0_desc);
    return ResourceDisplayData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_1).y1b = function (encoder, value) {
    var tmp0_desc = this.x1b_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().w1b_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.z1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.z1b_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.a1c_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.a1c_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !equals(value.b1c_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 2, tmp2_cached[2], value.b1c_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !equals(value.c1c_1, emptyMap())) {
      tmp1_output.vi(tmp0_desc, 3, tmp2_cached[3], value.c1c_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !equals(value.d1c_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 4, tmp2_cached[4], value.d1c_1);
    }
    if (tmp1_output.bj(tmp0_desc, 5) ? true : !(value.e1c_1 == null)) {
      tmp1_output.xi(tmp0_desc, 5, StringSerializer_getInstance(), value.e1c_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_1).ee = function (encoder, value) {
    return this.y1b(encoder, value instanceof ResourceDisplayData ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function ResourceDisplayData_init_$Init$(seen1, title, subtitle, badges, details, additionalInfo, rawJson, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_1().x1b_1);
    }
    if (0 === (seen1 & 1))
      $this.z1b_1 = null;
    else
      $this.z1b_1 = title;
    if (0 === (seen1 & 2))
      $this.a1c_1 = null;
    else
      $this.a1c_1 = subtitle;
    if (0 === (seen1 & 4))
      $this.b1c_1 = emptyList();
    else
      $this.b1c_1 = badges;
    if (0 === (seen1 & 8))
      $this.c1c_1 = emptyMap();
    else
      $this.c1c_1 = details;
    if (0 === (seen1 & 16))
      $this.d1c_1 = emptyList();
    else
      $this.d1c_1 = additionalInfo;
    if (0 === (seen1 & 32))
      $this.e1c_1 = null;
    else
      $this.e1c_1 = rawJson;
    return $this;
  }
  function ResourceDisplayData_init_$Create$(seen1, title, subtitle, badges, details, additionalInfo, rawJson, serializationConstructorMarker) {
    return ResourceDisplayData_init_$Init$(seen1, title, subtitle, badges, details, additionalInfo, rawJson, serializationConstructorMarker, objectCreate(protoOf(ResourceDisplayData)));
  }
  function ResourceDisplayData(title, subtitle, badges, details, additionalInfo, rawJson) {
    Companion_getInstance_3();
    title = title === VOID ? null : title;
    subtitle = subtitle === VOID ? null : subtitle;
    badges = badges === VOID ? emptyList() : badges;
    details = details === VOID ? emptyMap() : details;
    additionalInfo = additionalInfo === VOID ? emptyList() : additionalInfo;
    rawJson = rawJson === VOID ? null : rawJson;
    this.z1b_1 = title;
    this.a1c_1 = subtitle;
    this.b1c_1 = badges;
    this.c1c_1 = details;
    this.d1c_1 = additionalInfo;
    this.e1c_1 = rawJson;
  }
  protoOf(ResourceDisplayData).toString = function () {
    return 'ResourceDisplayData(title=' + this.z1b_1 + ', subtitle=' + this.a1c_1 + ', badges=' + this.b1c_1 + ', details=' + this.c1c_1 + ', additionalInfo=' + this.d1c_1 + ', rawJson=' + this.e1c_1 + ')';
  };
  protoOf(ResourceDisplayData).hashCode = function () {
    var result = this.z1b_1 == null ? 0 : getStringHashCode(this.z1b_1);
    result = imul(result, 31) + (this.a1c_1 == null ? 0 : getStringHashCode(this.a1c_1)) | 0;
    result = imul(result, 31) + hashCode(this.b1c_1) | 0;
    result = imul(result, 31) + hashCode(this.c1c_1) | 0;
    result = imul(result, 31) + hashCode(this.d1c_1) | 0;
    result = imul(result, 31) + (this.e1c_1 == null ? 0 : getStringHashCode(this.e1c_1)) | 0;
    return result;
  };
  protoOf(ResourceDisplayData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceDisplayData))
      return false;
    var tmp0_other_with_cast = other instanceof ResourceDisplayData ? other : THROW_CCE();
    if (!(this.z1b_1 == tmp0_other_with_cast.z1b_1))
      return false;
    if (!(this.a1c_1 == tmp0_other_with_cast.a1c_1))
      return false;
    if (!equals(this.b1c_1, tmp0_other_with_cast.b1c_1))
      return false;
    if (!equals(this.c1c_1, tmp0_other_with_cast.c1c_1))
      return false;
    if (!equals(this.d1c_1, tmp0_other_with_cast.d1c_1))
      return false;
    if (!(this.e1c_1 == tmp0_other_with_cast.e1c_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h1c_1 = [null, Companion_getInstance_5().i10(), Companion_getInstance_6().i10()];
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.core.Badge', this, 3);
    tmp0_serialDesc.ro('text', false);
    tmp0_serialDesc.ro('color', true);
    tmp0_serialDesc.ro('variant', true);
    this.i1c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).de = function () {
    return this.i1c_1;
  };
  protoOf($serializer_2).gp = function () {
    var tmp0_cached = Companion_getInstance_4().h1c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1], tmp0_cached[2]];
  };
  protoOf($serializer_2).fe = function (decoder) {
    var tmp0_desc = this.i1c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    var tmp8_cached = Companion_getInstance_4().h1c_1;
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.qh(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.qh(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.qh(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.qh(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return Badge_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_2).j1c = function (encoder, value) {
    var tmp0_desc = this.i1c_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().h1c_1;
    tmp1_output.ti(tmp0_desc, 0, value.k1c_1);
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !value.l1c_1.equals(BadgeColor_PRIMARY_getInstance())) {
      tmp1_output.vi(tmp0_desc, 1, tmp2_cached[1], value.l1c_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !value.m1c_1.equals(BadgeVariant_SOLID_getInstance())) {
      tmp1_output.vi(tmp0_desc, 2, tmp2_cached[2], value.m1c_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_2).ee = function (encoder, value) {
    return this.j1c(encoder, value instanceof Badge ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function Badge_init_$Init$(seen1, text, color, variant, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_2().i1c_1);
    }
    $this.k1c_1 = text;
    if (0 === (seen1 & 2))
      $this.l1c_1 = BadgeColor_PRIMARY_getInstance();
    else
      $this.l1c_1 = color;
    if (0 === (seen1 & 4))
      $this.m1c_1 = BadgeVariant_SOLID_getInstance();
    else
      $this.m1c_1 = variant;
    return $this;
  }
  function Badge_init_$Create$(seen1, text, color, variant, serializationConstructorMarker) {
    return Badge_init_$Init$(seen1, text, color, variant, serializationConstructorMarker, objectCreate(protoOf(Badge)));
  }
  function Badge(text, color, variant) {
    Companion_getInstance_4();
    color = color === VOID ? BadgeColor_PRIMARY_getInstance() : color;
    variant = variant === VOID ? BadgeVariant_SOLID_getInstance() : variant;
    this.k1c_1 = text;
    this.l1c_1 = color;
    this.m1c_1 = variant;
  }
  protoOf(Badge).toString = function () {
    return 'Badge(text=' + this.k1c_1 + ', color=' + this.l1c_1 + ', variant=' + this.m1c_1 + ')';
  };
  protoOf(Badge).hashCode = function () {
    var result = getStringHashCode(this.k1c_1);
    result = imul(result, 31) + this.l1c_1.hashCode() | 0;
    result = imul(result, 31) + this.m1c_1.hashCode() | 0;
    return result;
  };
  protoOf(Badge).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Badge))
      return false;
    var tmp0_other_with_cast = other instanceof Badge ? other : THROW_CCE();
    if (!(this.k1c_1 === tmp0_other_with_cast.k1c_1))
      return false;
    if (!this.l1c_1.equals(tmp0_other_with_cast.l1c_1))
      return false;
    if (!this.m1c_1.equals(tmp0_other_with_cast.m1c_1))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.f1c_1.l3();
  }
  function BadgeColor$Companion$_anonymous__pqnllb() {
    return createSimpleEnumSerializer('com.moreinformatics.ipsviewer.core.BadgeColor', values());
  }
  var BadgeColor_PRIMARY_instance;
  var BadgeColor_SECONDARY_instance;
  var BadgeColor_SUCCESS_instance;
  var BadgeColor_DANGER_instance;
  var BadgeColor_WARNING_instance;
  var BadgeColor_INFO_instance;
  var BadgeColor_LIGHT_instance;
  var BadgeColor_DARK_instance;
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.f1c_1 = lazy(tmp_0, BadgeColor$Companion$_anonymous__pqnllb);
  }
  protoOf(Companion_3).i10 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_3).rp = function (typeParamsSerializers) {
    return this.i10();
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    BadgeColor_initEntries();
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function values() {
    return [BadgeColor_PRIMARY_getInstance(), BadgeColor_SECONDARY_getInstance(), BadgeColor_SUCCESS_getInstance(), BadgeColor_DANGER_getInstance(), BadgeColor_WARNING_getInstance(), BadgeColor_INFO_getInstance(), BadgeColor_LIGHT_getInstance(), BadgeColor_DARK_getInstance()];
  }
  var BadgeColor_entriesInitialized;
  function BadgeColor_initEntries() {
    if (BadgeColor_entriesInitialized)
      return Unit_instance;
    BadgeColor_entriesInitialized = true;
    BadgeColor_PRIMARY_instance = new BadgeColor('PRIMARY', 0);
    BadgeColor_SECONDARY_instance = new BadgeColor('SECONDARY', 1);
    BadgeColor_SUCCESS_instance = new BadgeColor('SUCCESS', 2);
    BadgeColor_DANGER_instance = new BadgeColor('DANGER', 3);
    BadgeColor_WARNING_instance = new BadgeColor('WARNING', 4);
    BadgeColor_INFO_instance = new BadgeColor('INFO', 5);
    BadgeColor_LIGHT_instance = new BadgeColor('LIGHT', 6);
    BadgeColor_DARK_instance = new BadgeColor('DARK', 7);
    Companion_getInstance_5();
  }
  function BadgeColor(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.g1c_1.l3();
  }
  function BadgeVariant$Companion$_anonymous__w4fxd9() {
    return createSimpleEnumSerializer('com.moreinformatics.ipsviewer.core.BadgeVariant', values_0());
  }
  var BadgeVariant_SOLID_instance;
  var BadgeVariant_OUTLINE_instance;
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.g1c_1 = lazy(tmp_0, BadgeVariant$Companion$_anonymous__w4fxd9);
  }
  protoOf(Companion_4).i10 = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_4).rp = function (typeParamsSerializers) {
    return this.i10();
  };
  var Companion_instance_4;
  function Companion_getInstance_6() {
    BadgeVariant_initEntries();
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function values_0() {
    return [BadgeVariant_SOLID_getInstance(), BadgeVariant_OUTLINE_getInstance()];
  }
  var BadgeVariant_entriesInitialized;
  function BadgeVariant_initEntries() {
    if (BadgeVariant_entriesInitialized)
      return Unit_instance;
    BadgeVariant_entriesInitialized = true;
    BadgeVariant_SOLID_instance = new BadgeVariant('SOLID', 0);
    BadgeVariant_OUTLINE_instance = new BadgeVariant('OUTLINE', 1);
    Companion_getInstance_6();
  }
  function BadgeVariant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n1c_1 = [new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_5).i10 = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.core.IpsProcessingResult', this, 3);
    tmp0_serialDesc.ro('sections', false);
    tmp0_serialDesc.ro('errors', true);
    tmp0_serialDesc.ro('warnings', true);
    this.o1c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).de = function () {
    return this.o1c_1;
  };
  protoOf($serializer_3).gp = function () {
    var tmp0_cached = Companion_getInstance_7().n1c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1], tmp0_cached[2]];
  };
  protoOf($serializer_3).fe = function (decoder) {
    var tmp0_desc = this.o1c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    var tmp8_cached = Companion_getInstance_7().n1c_1;
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.qh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.qh(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.qh(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.qh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.qh(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.qh(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return IpsProcessingResult_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_3).p1c = function (encoder, value) {
    var tmp0_desc = this.o1c_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().n1c_1;
    tmp1_output.vi(tmp0_desc, 0, tmp2_cached[0], value.q1c_1);
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !equals(value.r1c_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 1, tmp2_cached[1], value.r1c_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !equals(value.s1c_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 2, tmp2_cached[2], value.s1c_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_3).ee = function (encoder, value) {
    return this.p1c(encoder, value instanceof IpsProcessingResult ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function IpsProcessingResult_init_$Init$(seen1, sections, errors, warnings, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_3().o1c_1);
    }
    $this.q1c_1 = sections;
    if (0 === (seen1 & 2))
      $this.r1c_1 = emptyList();
    else
      $this.r1c_1 = errors;
    if (0 === (seen1 & 4))
      $this.s1c_1 = emptyList();
    else
      $this.s1c_1 = warnings;
    return $this;
  }
  function IpsProcessingResult_init_$Create$(seen1, sections, errors, warnings, serializationConstructorMarker) {
    return IpsProcessingResult_init_$Init$(seen1, sections, errors, warnings, serializationConstructorMarker, objectCreate(protoOf(IpsProcessingResult)));
  }
  function IpsProcessingResult(sections, errors, warnings) {
    Companion_getInstance_7();
    errors = errors === VOID ? emptyList() : errors;
    warnings = warnings === VOID ? emptyList() : warnings;
    this.q1c_1 = sections;
    this.r1c_1 = errors;
    this.s1c_1 = warnings;
  }
  protoOf(IpsProcessingResult).toString = function () {
    return 'IpsProcessingResult(sections=' + this.q1c_1 + ', errors=' + this.r1c_1 + ', warnings=' + this.s1c_1 + ')';
  };
  protoOf(IpsProcessingResult).hashCode = function () {
    var result = hashCode(this.q1c_1);
    result = imul(result, 31) + hashCode(this.r1c_1) | 0;
    result = imul(result, 31) + hashCode(this.s1c_1) | 0;
    return result;
  };
  protoOf(IpsProcessingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IpsProcessingResult))
      return false;
    var tmp0_other_with_cast = other instanceof IpsProcessingResult ? other : THROW_CCE();
    if (!equals(this.q1c_1, tmp0_other_with_cast.q1c_1))
      return false;
    if (!equals(this.r1c_1, tmp0_other_with_cast.r1c_1))
      return false;
    if (!equals(this.s1c_1, tmp0_other_with_cast.s1c_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.u1c_1 = [Companion_getInstance_9().i10(), null, null];
  }
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.core.IpsProcessingConfig', this, 3);
    tmp0_serialDesc.ro('mode', true);
    tmp0_serialDesc.ro('includeRawJson', true);
    tmp0_serialDesc.ro('dateFormat', true);
    this.v1c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).de = function () {
    return this.v1c_1;
  };
  protoOf($serializer_4).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_8().u1c_1[0], BooleanSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_4).fe = function (decoder) {
    var tmp0_desc = this.v1c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().u1c_1;
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.qh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.gh(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.oh(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.qh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.gh(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.oh(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return IpsProcessingConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_4).w1c = function (encoder, value) {
    var tmp0_desc = this.v1c_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().u1c_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !value.d1a_1.equals(ProcessingMode_APP_getInstance())) {
      tmp1_output.vi(tmp0_desc, 0, tmp2_cached[0], value.d1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.e1a_1 === true)) {
      tmp1_output.li(tmp0_desc, 1, value.e1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.f1a_1 === 'dd-MMM-yyyy')) {
      tmp1_output.ti(tmp0_desc, 2, value.f1a_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_4).ee = function (encoder, value) {
    return this.w1c(encoder, value instanceof IpsProcessingConfig ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function IpsProcessingConfig_init_$Init$(seen1, mode, includeRawJson, dateFormat, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_4().v1c_1);
    }
    if (0 === (seen1 & 1))
      $this.d1a_1 = ProcessingMode_APP_getInstance();
    else
      $this.d1a_1 = mode;
    if (0 === (seen1 & 2))
      $this.e1a_1 = true;
    else
      $this.e1a_1 = includeRawJson;
    if (0 === (seen1 & 4))
      $this.f1a_1 = 'dd-MMM-yyyy';
    else
      $this.f1a_1 = dateFormat;
    return $this;
  }
  function IpsProcessingConfig_init_$Create$(seen1, mode, includeRawJson, dateFormat, serializationConstructorMarker) {
    return IpsProcessingConfig_init_$Init$(seen1, mode, includeRawJson, dateFormat, serializationConstructorMarker, objectCreate(protoOf(IpsProcessingConfig)));
  }
  function IpsProcessingConfig(mode, includeRawJson, dateFormat) {
    Companion_getInstance_8();
    mode = mode === VOID ? ProcessingMode_APP_getInstance() : mode;
    includeRawJson = includeRawJson === VOID ? true : includeRawJson;
    dateFormat = dateFormat === VOID ? 'dd-MMM-yyyy' : dateFormat;
    this.d1a_1 = mode;
    this.e1a_1 = includeRawJson;
    this.f1a_1 = dateFormat;
  }
  protoOf(IpsProcessingConfig).toString = function () {
    return 'IpsProcessingConfig(mode=' + this.d1a_1 + ', includeRawJson=' + this.e1a_1 + ', dateFormat=' + this.f1a_1 + ')';
  };
  protoOf(IpsProcessingConfig).hashCode = function () {
    var result = this.d1a_1.hashCode();
    result = imul(result, 31) + getBooleanHashCode(this.e1a_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f1a_1) | 0;
    return result;
  };
  protoOf(IpsProcessingConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IpsProcessingConfig))
      return false;
    var tmp0_other_with_cast = other instanceof IpsProcessingConfig ? other : THROW_CCE();
    if (!this.d1a_1.equals(tmp0_other_with_cast.d1a_1))
      return false;
    if (!(this.e1a_1 === tmp0_other_with_cast.e1a_1))
      return false;
    if (!(this.f1a_1 === tmp0_other_with_cast.f1a_1))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.t1c_1.l3();
  }
  function ProcessingMode$Companion$_anonymous__r43d89() {
    return createSimpleEnumSerializer('com.moreinformatics.ipsviewer.core.ProcessingMode', values_1());
  }
  var ProcessingMode_APP_instance;
  var ProcessingMode_TEXT_instance;
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.t1c_1 = lazy(tmp_0, ProcessingMode$Companion$_anonymous__r43d89);
  }
  protoOf(Companion_7).i10 = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_7).rp = function (typeParamsSerializers) {
    return this.i10();
  };
  var Companion_instance_7;
  function Companion_getInstance_9() {
    ProcessingMode_initEntries();
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function values_1() {
    return [ProcessingMode_APP_getInstance(), ProcessingMode_TEXT_getInstance()];
  }
  var ProcessingMode_entriesInitialized;
  function ProcessingMode_initEntries() {
    if (ProcessingMode_entriesInitialized)
      return Unit_instance;
    ProcessingMode_entriesInitialized = true;
    ProcessingMode_APP_instance = new ProcessingMode('APP', 0);
    ProcessingMode_TEXT_instance = new ProcessingMode('TEXT', 1);
    Companion_getInstance_9();
  }
  function ProcessingMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BadgeColor_PRIMARY_getInstance() {
    BadgeColor_initEntries();
    return BadgeColor_PRIMARY_instance;
  }
  function BadgeColor_SECONDARY_getInstance() {
    BadgeColor_initEntries();
    return BadgeColor_SECONDARY_instance;
  }
  function BadgeColor_SUCCESS_getInstance() {
    BadgeColor_initEntries();
    return BadgeColor_SUCCESS_instance;
  }
  function BadgeColor_DANGER_getInstance() {
    BadgeColor_initEntries();
    return BadgeColor_DANGER_instance;
  }
  function BadgeColor_WARNING_getInstance() {
    BadgeColor_initEntries();
    return BadgeColor_WARNING_instance;
  }
  function BadgeColor_INFO_getInstance() {
    BadgeColor_initEntries();
    return BadgeColor_INFO_instance;
  }
  function BadgeColor_LIGHT_getInstance() {
    BadgeColor_initEntries();
    return BadgeColor_LIGHT_instance;
  }
  function BadgeColor_DARK_getInstance() {
    BadgeColor_initEntries();
    return BadgeColor_DARK_instance;
  }
  function BadgeVariant_SOLID_getInstance() {
    BadgeVariant_initEntries();
    return BadgeVariant_SOLID_instance;
  }
  function BadgeVariant_OUTLINE_getInstance() {
    BadgeVariant_initEntries();
    return BadgeVariant_OUTLINE_instance;
  }
  function ProcessingMode_APP_getInstance() {
    ProcessingMode_initEntries();
    return ProcessingMode_APP_instance;
  }
  function ProcessingMode_TEXT_getInstance() {
    ProcessingMode_initEntries();
    return ProcessingMode_TEXT_instance;
  }
  function Companion_8() {
    Companion_instance_8 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x1c_1 = [null, null, new ArrayListSerializer($serializer_getInstance_6())];
  }
  var Companion_instance_8;
  function Companion_getInstance_10() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Bundle', this, 3);
    tmp0_serialDesc.ro('resourceType', true);
    tmp0_serialDesc.ro('id', true);
    tmp0_serialDesc.ro('entry', true);
    this.y1c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).de = function () {
    return this.y1c_1;
  };
  protoOf($serializer_5).gp = function () {
    var tmp0_cached = Companion_getInstance_10().x1c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2])];
  };
  protoOf($serializer_5).fe = function (decoder) {
    var tmp0_desc = this.y1c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    var tmp8_cached = Companion_getInstance_10().x1c_1;
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return Bundle_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).z1c = function (encoder, value) {
    var tmp0_desc = this.y1c_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().x1c_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.s1a_1 === 'Bundle')) {
      tmp1_output.ti(tmp0_desc, 0, value.s1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.t1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.t1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.u1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, tmp2_cached[2], value.u1a_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_5).ee = function (encoder, value) {
    return this.z1c(encoder, value instanceof Bundle ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function Bundle_init_$Init$(seen1, resourceType, id, entry, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_5().y1c_1);
    }
    if (0 === (seen1 & 1))
      $this.s1a_1 = 'Bundle';
    else
      $this.s1a_1 = resourceType;
    if (0 === (seen1 & 2))
      $this.t1a_1 = null;
    else
      $this.t1a_1 = id;
    if (0 === (seen1 & 4))
      $this.u1a_1 = null;
    else
      $this.u1a_1 = entry;
    return $this;
  }
  function Bundle_init_$Create$(seen1, resourceType, id, entry, serializationConstructorMarker) {
    return Bundle_init_$Init$(seen1, resourceType, id, entry, serializationConstructorMarker, objectCreate(protoOf(Bundle)));
  }
  function Bundle(resourceType, id, entry) {
    Companion_getInstance_10();
    resourceType = resourceType === VOID ? 'Bundle' : resourceType;
    id = id === VOID ? null : id;
    entry = entry === VOID ? null : entry;
    this.s1a_1 = resourceType;
    this.t1a_1 = id;
    this.u1a_1 = entry;
  }
  protoOf(Bundle).toString = function () {
    return 'Bundle(resourceType=' + this.s1a_1 + ', id=' + this.t1a_1 + ', entry=' + this.u1a_1 + ')';
  };
  protoOf(Bundle).hashCode = function () {
    var result = getStringHashCode(this.s1a_1);
    result = imul(result, 31) + (this.t1a_1 == null ? 0 : getStringHashCode(this.t1a_1)) | 0;
    result = imul(result, 31) + (this.u1a_1 == null ? 0 : hashCode(this.u1a_1)) | 0;
    return result;
  };
  protoOf(Bundle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Bundle))
      return false;
    var tmp0_other_with_cast = other instanceof Bundle ? other : THROW_CCE();
    if (!(this.s1a_1 === tmp0_other_with_cast.s1a_1))
      return false;
    if (!(this.t1a_1 == tmp0_other_with_cast.t1a_1))
      return false;
    if (!equals(this.u1a_1, tmp0_other_with_cast.u1a_1))
      return false;
    return true;
  };
  function Companion_9() {
  }
  var Companion_instance_9;
  function Companion_getInstance_11() {
    return Companion_instance_9;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.BundleEntry', this, 2);
    tmp0_serialDesc.ro('fullUrl', true);
    tmp0_serialDesc.ro('resource', true);
    this.a1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).de = function () {
    return this.a1d_1;
  };
  protoOf($serializer_6).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_7())];
  };
  protoOf($serializer_6).fe = function (decoder) {
    var tmp0_desc = this.a1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.eh(tmp0_desc);
    if (tmp6_input.uh()) {
      tmp4_local0 = tmp6_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.sh(tmp0_desc, 1, $serializer_getInstance_7(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.sh(tmp0_desc, 1, $serializer_getInstance_7(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.fh(tmp0_desc);
    return BundleEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).b1d = function (encoder, value) {
    var tmp0_desc = this.a1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.w19_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.w19_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.x19_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, $serializer_getInstance_7(), value.x19_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_6).ee = function (encoder, value) {
    return this.b1d(encoder, value instanceof BundleEntry ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function BundleEntry_init_$Init$(seen1, fullUrl, resource, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_6().a1d_1);
    }
    if (0 === (seen1 & 1))
      $this.w19_1 = null;
    else
      $this.w19_1 = fullUrl;
    if (0 === (seen1 & 2))
      $this.x19_1 = null;
    else
      $this.x19_1 = resource;
    return $this;
  }
  function BundleEntry_init_$Create$(seen1, fullUrl, resource, serializationConstructorMarker) {
    return BundleEntry_init_$Init$(seen1, fullUrl, resource, serializationConstructorMarker, objectCreate(protoOf(BundleEntry)));
  }
  function BundleEntry(fullUrl, resource) {
    fullUrl = fullUrl === VOID ? null : fullUrl;
    resource = resource === VOID ? null : resource;
    this.w19_1 = fullUrl;
    this.x19_1 = resource;
  }
  protoOf(BundleEntry).toString = function () {
    return 'BundleEntry(fullUrl=' + this.w19_1 + ', resource=' + this.x19_1 + ')';
  };
  protoOf(BundleEntry).hashCode = function () {
    var result = this.w19_1 == null ? 0 : getStringHashCode(this.w19_1);
    result = imul(result, 31) + (this.x19_1 == null ? 0 : this.x19_1.hashCode()) | 0;
    return result;
  };
  protoOf(BundleEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BundleEntry))
      return false;
    var tmp0_other_with_cast = other instanceof BundleEntry ? other : THROW_CCE();
    if (!(this.w19_1 == tmp0_other_with_cast.w19_1))
      return false;
    if (!equals(this.x19_1, tmp0_other_with_cast.x19_1))
      return false;
    return true;
  };
  function Companion_10() {
  }
  protoOf(Companion_10).i10 = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_10;
  function Companion_getInstance_12() {
    return Companion_instance_10;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Resource', this, 3);
    tmp0_serialDesc.ro('resourceType', false);
    tmp0_serialDesc.ro('id', true);
    tmp0_serialDesc.ro('content', true);
    this.c1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).de = function () {
    return this.c1d_1;
  };
  protoOf($serializer_7).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(JsonElementSerializer_getInstance())];
  };
  protoOf($serializer_7).fe = function (decoder) {
    var tmp0_desc = this.c1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, JsonElementSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, JsonElementSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return Resource_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_7).d1d = function (encoder, value) {
    var tmp0_desc = this.c1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    tmp1_output.ti(tmp0_desc, 0, value.y19_1);
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.z19_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.z19_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.a1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, JsonElementSerializer_getInstance(), value.a1a_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_7).ee = function (encoder, value) {
    return this.d1d(encoder, value instanceof Resource ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function Resource_init_$Init$(seen1, resourceType, id, content, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_7().c1d_1);
    }
    $this.y19_1 = resourceType;
    if (0 === (seen1 & 2))
      $this.z19_1 = null;
    else
      $this.z19_1 = id;
    if (0 === (seen1 & 4))
      $this.a1a_1 = null;
    else
      $this.a1a_1 = content;
    return $this;
  }
  function Resource_init_$Create$(seen1, resourceType, id, content, serializationConstructorMarker) {
    return Resource_init_$Init$(seen1, resourceType, id, content, serializationConstructorMarker, objectCreate(protoOf(Resource)));
  }
  function Resource(resourceType, id, content) {
    id = id === VOID ? null : id;
    content = content === VOID ? null : content;
    this.y19_1 = resourceType;
    this.z19_1 = id;
    this.a1a_1 = content;
  }
  protoOf(Resource).toString = function () {
    return 'Resource(resourceType=' + this.y19_1 + ', id=' + this.z19_1 + ', content=' + this.a1a_1 + ')';
  };
  protoOf(Resource).hashCode = function () {
    var result = getStringHashCode(this.y19_1);
    result = imul(result, 31) + (this.z19_1 == null ? 0 : getStringHashCode(this.z19_1)) | 0;
    result = imul(result, 31) + (this.a1a_1 == null ? 0 : hashCode(this.a1a_1)) | 0;
    return result;
  };
  protoOf(Resource).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Resource))
      return false;
    var tmp0_other_with_cast = other instanceof Resource ? other : THROW_CCE();
    if (!(this.y19_1 === tmp0_other_with_cast.y19_1))
      return false;
    if (!(this.z19_1 == tmp0_other_with_cast.z19_1))
      return false;
    if (!equals(this.a1a_1, tmp0_other_with_cast.a1a_1))
      return false;
    return true;
  };
  function Companion_11() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e1d_1 = [null, null, null, null, new ArrayListSerializer($serializer_getInstance_9())];
  }
  var Companion_instance_11;
  function Companion_getInstance_13() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Composition', this, 5);
    tmp0_serialDesc.ro('resourceType', true);
    tmp0_serialDesc.ro('id', true);
    tmp0_serialDesc.ro('subject', true);
    tmp0_serialDesc.ro('custodian', true);
    tmp0_serialDesc.ro('section', true);
    this.f1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).de = function () {
    return this.f1d_1;
  };
  protoOf($serializer_8).gp = function () {
    var tmp0_cached = Companion_getInstance_13().e1d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_10()), get_nullable($serializer_getInstance_10()), get_nullable(tmp0_cached[4])];
  };
  protoOf($serializer_8).fe = function (decoder) {
    var tmp0_desc = this.f1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.eh(tmp0_desc);
    var tmp10_cached = Companion_getInstance_13().e1d_1;
    if (tmp9_input.uh()) {
      tmp4_local0 = tmp9_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.sh(tmp0_desc, 2, $serializer_getInstance_10(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.sh(tmp0_desc, 3, $serializer_getInstance_10(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.sh(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.sh(tmp0_desc, 2, $serializer_getInstance_10(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.sh(tmp0_desc, 3, $serializer_getInstance_10(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.sh(tmp0_desc, 4, tmp10_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.fh(tmp0_desc);
    return Composition_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_8).g1d = function (encoder, value) {
    var tmp0_desc = this.f1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().e1d_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.v1a_1 === 'Composition')) {
      tmp1_output.ti(tmp0_desc, 0, value.v1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.w1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.w1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.x1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, $serializer_getInstance_10(), value.x1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.y1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, $serializer_getInstance_10(), value.y1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !(value.z1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 4, tmp2_cached[4], value.z1a_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_8).ee = function (encoder, value) {
    return this.g1d(encoder, value instanceof Composition ? value : THROW_CCE());
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function Composition_init_$Init$(seen1, resourceType, id, subject, custodian, section, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_8().f1d_1);
    }
    if (0 === (seen1 & 1))
      $this.v1a_1 = 'Composition';
    else
      $this.v1a_1 = resourceType;
    if (0 === (seen1 & 2))
      $this.w1a_1 = null;
    else
      $this.w1a_1 = id;
    if (0 === (seen1 & 4))
      $this.x1a_1 = null;
    else
      $this.x1a_1 = subject;
    if (0 === (seen1 & 8))
      $this.y1a_1 = null;
    else
      $this.y1a_1 = custodian;
    if (0 === (seen1 & 16))
      $this.z1a_1 = null;
    else
      $this.z1a_1 = section;
    return $this;
  }
  function Composition_init_$Create$(seen1, resourceType, id, subject, custodian, section, serializationConstructorMarker) {
    return Composition_init_$Init$(seen1, resourceType, id, subject, custodian, section, serializationConstructorMarker, objectCreate(protoOf(Composition)));
  }
  function Composition(resourceType, id, subject, custodian, section) {
    Companion_getInstance_13();
    resourceType = resourceType === VOID ? 'Composition' : resourceType;
    id = id === VOID ? null : id;
    subject = subject === VOID ? null : subject;
    custodian = custodian === VOID ? null : custodian;
    section = section === VOID ? null : section;
    this.v1a_1 = resourceType;
    this.w1a_1 = id;
    this.x1a_1 = subject;
    this.y1a_1 = custodian;
    this.z1a_1 = section;
  }
  protoOf(Composition).toString = function () {
    return 'Composition(resourceType=' + this.v1a_1 + ', id=' + this.w1a_1 + ', subject=' + this.x1a_1 + ', custodian=' + this.y1a_1 + ', section=' + this.z1a_1 + ')';
  };
  protoOf(Composition).hashCode = function () {
    var result = getStringHashCode(this.v1a_1);
    result = imul(result, 31) + (this.w1a_1 == null ? 0 : getStringHashCode(this.w1a_1)) | 0;
    result = imul(result, 31) + (this.x1a_1 == null ? 0 : this.x1a_1.hashCode()) | 0;
    result = imul(result, 31) + (this.y1a_1 == null ? 0 : this.y1a_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z1a_1 == null ? 0 : hashCode(this.z1a_1)) | 0;
    return result;
  };
  protoOf(Composition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Composition))
      return false;
    var tmp0_other_with_cast = other instanceof Composition ? other : THROW_CCE();
    if (!(this.v1a_1 === tmp0_other_with_cast.v1a_1))
      return false;
    if (!(this.w1a_1 == tmp0_other_with_cast.w1a_1))
      return false;
    if (!equals(this.x1a_1, tmp0_other_with_cast.x1a_1))
      return false;
    if (!equals(this.y1a_1, tmp0_other_with_cast.y1a_1))
      return false;
    if (!equals(this.z1a_1, tmp0_other_with_cast.z1a_1))
      return false;
    return true;
  };
  function Companion_12() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h1d_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_10())];
  }
  var Companion_instance_12;
  function Companion_getInstance_14() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.CompositionSection', this, 4);
    tmp0_serialDesc.ro('title', true);
    tmp0_serialDesc.ro('code', true);
    tmp0_serialDesc.ro('text', true);
    tmp0_serialDesc.ro('entry', true);
    this.i1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).de = function () {
    return this.i1d_1;
  };
  protoOf($serializer_9).gp = function () {
    var tmp0_cached = Companion_getInstance_14().h1d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_11()), get_nullable($serializer_getInstance_13()), get_nullable(tmp0_cached[3])];
  };
  protoOf($serializer_9).fe = function (decoder) {
    var tmp0_desc = this.i1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.eh(tmp0_desc);
    var tmp9_cached = Companion_getInstance_14().h1d_1;
    if (tmp8_input.uh()) {
      tmp4_local0 = tmp8_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.sh(tmp0_desc, 1, $serializer_getInstance_11(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.sh(tmp0_desc, 2, $serializer_getInstance_13(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.sh(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.sh(tmp0_desc, 1, $serializer_getInstance_11(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.sh(tmp0_desc, 2, $serializer_getInstance_13(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.sh(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.fh(tmp0_desc);
    return CompositionSection_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).j1d = function (encoder, value) {
    var tmp0_desc = this.i1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().h1d_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.a1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.a1b_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.b1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, $serializer_getInstance_11(), value.b1b_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.c1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, $serializer_getInstance_13(), value.c1b_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.d1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, tmp2_cached[3], value.d1b_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_9).ee = function (encoder, value) {
    return this.j1d(encoder, value instanceof CompositionSection ? value : THROW_CCE());
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function CompositionSection_init_$Init$(seen1, title, code, text, entry, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_9().i1d_1);
    }
    if (0 === (seen1 & 1))
      $this.a1b_1 = null;
    else
      $this.a1b_1 = title;
    if (0 === (seen1 & 2))
      $this.b1b_1 = null;
    else
      $this.b1b_1 = code;
    if (0 === (seen1 & 4))
      $this.c1b_1 = null;
    else
      $this.c1b_1 = text;
    if (0 === (seen1 & 8))
      $this.d1b_1 = null;
    else
      $this.d1b_1 = entry;
    return $this;
  }
  function CompositionSection_init_$Create$(seen1, title, code, text, entry, serializationConstructorMarker) {
    return CompositionSection_init_$Init$(seen1, title, code, text, entry, serializationConstructorMarker, objectCreate(protoOf(CompositionSection)));
  }
  function CompositionSection(title, code, text, entry) {
    Companion_getInstance_14();
    title = title === VOID ? null : title;
    code = code === VOID ? null : code;
    text = text === VOID ? null : text;
    entry = entry === VOID ? null : entry;
    this.a1b_1 = title;
    this.b1b_1 = code;
    this.c1b_1 = text;
    this.d1b_1 = entry;
  }
  protoOf(CompositionSection).toString = function () {
    return 'CompositionSection(title=' + this.a1b_1 + ', code=' + this.b1b_1 + ', text=' + this.c1b_1 + ', entry=' + this.d1b_1 + ')';
  };
  protoOf(CompositionSection).hashCode = function () {
    var result = this.a1b_1 == null ? 0 : getStringHashCode(this.a1b_1);
    result = imul(result, 31) + (this.b1b_1 == null ? 0 : this.b1b_1.hashCode()) | 0;
    result = imul(result, 31) + (this.c1b_1 == null ? 0 : this.c1b_1.hashCode()) | 0;
    result = imul(result, 31) + (this.d1b_1 == null ? 0 : hashCode(this.d1b_1)) | 0;
    return result;
  };
  protoOf(CompositionSection).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompositionSection))
      return false;
    var tmp0_other_with_cast = other instanceof CompositionSection ? other : THROW_CCE();
    if (!(this.a1b_1 == tmp0_other_with_cast.a1b_1))
      return false;
    if (!equals(this.b1b_1, tmp0_other_with_cast.b1b_1))
      return false;
    if (!equals(this.c1b_1, tmp0_other_with_cast.c1b_1))
      return false;
    if (!equals(this.d1b_1, tmp0_other_with_cast.d1b_1))
      return false;
    return true;
  };
  function Companion_13() {
  }
  var Companion_instance_13;
  function Companion_getInstance_15() {
    return Companion_instance_13;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Reference', this, 2);
    tmp0_serialDesc.ro('reference', true);
    tmp0_serialDesc.ro('display', true);
    this.k1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).de = function () {
    return this.k1d_1;
  };
  protoOf($serializer_10).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_10).fe = function (decoder) {
    var tmp0_desc = this.k1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.eh(tmp0_desc);
    if (tmp6_input.uh()) {
      tmp4_local0 = tmp6_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.fh(tmp0_desc);
    return Reference_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).l1d = function (encoder, value) {
    var tmp0_desc = this.k1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.j1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.j1b_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.k1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.k1b_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_10).ee = function (encoder, value) {
    return this.l1d(encoder, value instanceof Reference ? value : THROW_CCE());
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function Reference_init_$Init$(seen1, reference, display, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_10().k1d_1);
    }
    if (0 === (seen1 & 1))
      $this.j1b_1 = null;
    else
      $this.j1b_1 = reference;
    if (0 === (seen1 & 2))
      $this.k1b_1 = null;
    else
      $this.k1b_1 = display;
    return $this;
  }
  function Reference_init_$Create$(seen1, reference, display, serializationConstructorMarker) {
    return Reference_init_$Init$(seen1, reference, display, serializationConstructorMarker, objectCreate(protoOf(Reference)));
  }
  function Reference(reference, display) {
    reference = reference === VOID ? null : reference;
    display = display === VOID ? null : display;
    this.j1b_1 = reference;
    this.k1b_1 = display;
  }
  protoOf(Reference).toString = function () {
    return 'Reference(reference=' + this.j1b_1 + ', display=' + this.k1b_1 + ')';
  };
  protoOf(Reference).hashCode = function () {
    var result = this.j1b_1 == null ? 0 : getStringHashCode(this.j1b_1);
    result = imul(result, 31) + (this.k1b_1 == null ? 0 : getStringHashCode(this.k1b_1)) | 0;
    return result;
  };
  protoOf(Reference).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Reference))
      return false;
    var tmp0_other_with_cast = other instanceof Reference ? other : THROW_CCE();
    if (!(this.j1b_1 == tmp0_other_with_cast.j1b_1))
      return false;
    if (!(this.k1b_1 == tmp0_other_with_cast.k1b_1))
      return false;
    return true;
  };
  function Companion_14() {
    Companion_instance_14 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m1d_1 = [new ArrayListSerializer($serializer_getInstance_12()), null];
  }
  var Companion_instance_14;
  function Companion_getInstance_16() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.CodeableConcept', this, 2);
    tmp0_serialDesc.ro('coding', true);
    tmp0_serialDesc.ro('text', true);
    this.n1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).de = function () {
    return this.n1d_1;
  };
  protoOf($serializer_11).gp = function () {
    var tmp0_cached = Companion_getInstance_16().m1d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_11).fe = function (decoder) {
    var tmp0_desc = this.n1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.eh(tmp0_desc);
    var tmp7_cached = Companion_getInstance_16().m1d_1;
    if (tmp6_input.uh()) {
      tmp4_local0 = tmp6_input.sh(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.sh(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.fh(tmp0_desc);
    return CodeableConcept_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).o1d = function (encoder, value) {
    var tmp0_desc = this.n1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().m1d_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.e1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, tmp2_cached[0], value.e1b_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.f1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.f1b_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_11).ee = function (encoder, value) {
    return this.o1d(encoder, value instanceof CodeableConcept ? value : THROW_CCE());
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function CodeableConcept_init_$Init$(seen1, coding, text, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_11().n1d_1);
    }
    if (0 === (seen1 & 1))
      $this.e1b_1 = null;
    else
      $this.e1b_1 = coding;
    if (0 === (seen1 & 2))
      $this.f1b_1 = null;
    else
      $this.f1b_1 = text;
    return $this;
  }
  function CodeableConcept_init_$Create$(seen1, coding, text, serializationConstructorMarker) {
    return CodeableConcept_init_$Init$(seen1, coding, text, serializationConstructorMarker, objectCreate(protoOf(CodeableConcept)));
  }
  function CodeableConcept(coding, text) {
    Companion_getInstance_16();
    coding = coding === VOID ? null : coding;
    text = text === VOID ? null : text;
    this.e1b_1 = coding;
    this.f1b_1 = text;
  }
  protoOf(CodeableConcept).toString = function () {
    return 'CodeableConcept(coding=' + this.e1b_1 + ', text=' + this.f1b_1 + ')';
  };
  protoOf(CodeableConcept).hashCode = function () {
    var result = this.e1b_1 == null ? 0 : hashCode(this.e1b_1);
    result = imul(result, 31) + (this.f1b_1 == null ? 0 : getStringHashCode(this.f1b_1)) | 0;
    return result;
  };
  protoOf(CodeableConcept).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CodeableConcept))
      return false;
    var tmp0_other_with_cast = other instanceof CodeableConcept ? other : THROW_CCE();
    if (!equals(this.e1b_1, tmp0_other_with_cast.e1b_1))
      return false;
    if (!(this.f1b_1 == tmp0_other_with_cast.f1b_1))
      return false;
    return true;
  };
  function Companion_15() {
  }
  var Companion_instance_15;
  function Companion_getInstance_17() {
    return Companion_instance_15;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Coding', this, 3);
    tmp0_serialDesc.ro('system', true);
    tmp0_serialDesc.ro('code', true);
    tmp0_serialDesc.ro('display', true);
    this.p1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).de = function () {
    return this.p1d_1;
  };
  protoOf($serializer_12).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_12).fe = function (decoder) {
    var tmp0_desc = this.p1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return Coding_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_12).q1d = function (encoder, value) {
    var tmp0_desc = this.p1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.g1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.g1b_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.h1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.h1b_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.i1b_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, StringSerializer_getInstance(), value.i1b_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_12).ee = function (encoder, value) {
    return this.q1d(encoder, value instanceof Coding ? value : THROW_CCE());
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function Coding_init_$Init$(seen1, system, code, display, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_12().p1d_1);
    }
    if (0 === (seen1 & 1))
      $this.g1b_1 = null;
    else
      $this.g1b_1 = system;
    if (0 === (seen1 & 2))
      $this.h1b_1 = null;
    else
      $this.h1b_1 = code;
    if (0 === (seen1 & 4))
      $this.i1b_1 = null;
    else
      $this.i1b_1 = display;
    return $this;
  }
  function Coding_init_$Create$(seen1, system, code, display, serializationConstructorMarker) {
    return Coding_init_$Init$(seen1, system, code, display, serializationConstructorMarker, objectCreate(protoOf(Coding)));
  }
  function Coding(system, code, display) {
    system = system === VOID ? null : system;
    code = code === VOID ? null : code;
    display = display === VOID ? null : display;
    this.g1b_1 = system;
    this.h1b_1 = code;
    this.i1b_1 = display;
  }
  protoOf(Coding).toString = function () {
    return 'Coding(system=' + this.g1b_1 + ', code=' + this.h1b_1 + ', display=' + this.i1b_1 + ')';
  };
  protoOf(Coding).hashCode = function () {
    var result = this.g1b_1 == null ? 0 : getStringHashCode(this.g1b_1);
    result = imul(result, 31) + (this.h1b_1 == null ? 0 : getStringHashCode(this.h1b_1)) | 0;
    result = imul(result, 31) + (this.i1b_1 == null ? 0 : getStringHashCode(this.i1b_1)) | 0;
    return result;
  };
  protoOf(Coding).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Coding))
      return false;
    var tmp0_other_with_cast = other instanceof Coding ? other : THROW_CCE();
    if (!(this.g1b_1 == tmp0_other_with_cast.g1b_1))
      return false;
    if (!(this.h1b_1 == tmp0_other_with_cast.h1b_1))
      return false;
    if (!(this.i1b_1 == tmp0_other_with_cast.i1b_1))
      return false;
    return true;
  };
  function Companion_16() {
  }
  var Companion_instance_16;
  function Companion_getInstance_18() {
    return Companion_instance_16;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Narrative', this, 2);
    tmp0_serialDesc.ro('status', true);
    tmp0_serialDesc.ro('div', true);
    this.r1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).de = function () {
    return this.r1d_1;
  };
  protoOf($serializer_13).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_13).fe = function (decoder) {
    var tmp0_desc = this.r1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.eh(tmp0_desc);
    if (tmp6_input.uh()) {
      tmp4_local0 = tmp6_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.fh(tmp0_desc);
    return Narrative_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).s1d = function (encoder, value) {
    var tmp0_desc = this.r1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.t1d_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.t1d_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.u1d_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.u1d_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_13).ee = function (encoder, value) {
    return this.s1d(encoder, value instanceof Narrative ? value : THROW_CCE());
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function Narrative_init_$Init$(seen1, status, div, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_13().r1d_1);
    }
    if (0 === (seen1 & 1))
      $this.t1d_1 = null;
    else
      $this.t1d_1 = status;
    if (0 === (seen1 & 2))
      $this.u1d_1 = null;
    else
      $this.u1d_1 = div;
    return $this;
  }
  function Narrative_init_$Create$(seen1, status, div, serializationConstructorMarker) {
    return Narrative_init_$Init$(seen1, status, div, serializationConstructorMarker, objectCreate(protoOf(Narrative)));
  }
  function Narrative(status, div) {
    status = status === VOID ? null : status;
    div = div === VOID ? null : div;
    this.t1d_1 = status;
    this.u1d_1 = div;
  }
  protoOf(Narrative).toString = function () {
    return 'Narrative(status=' + this.t1d_1 + ', div=' + this.u1d_1 + ')';
  };
  protoOf(Narrative).hashCode = function () {
    var result = this.t1d_1 == null ? 0 : getStringHashCode(this.t1d_1);
    result = imul(result, 31) + (this.u1d_1 == null ? 0 : getStringHashCode(this.u1d_1)) | 0;
    return result;
  };
  protoOf(Narrative).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Narrative))
      return false;
    var tmp0_other_with_cast = other instanceof Narrative ? other : THROW_CCE();
    if (!(this.t1d_1 == tmp0_other_with_cast.t1d_1))
      return false;
    if (!(this.u1d_1 == tmp0_other_with_cast.u1d_1))
      return false;
    return true;
  };
  function Companion_17() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v1d_1 = [null, null, new ArrayListSerializer($serializer_getInstance_15()), null, null, new ArrayListSerializer($serializer_getInstance_16()), new ArrayListSerializer($serializer_getInstance_17()), new ArrayListSerializer($serializer_getInstance_18())];
  }
  var Companion_instance_17;
  function Companion_getInstance_19() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Patient', this, 8);
    tmp0_serialDesc.ro('resourceType', true);
    tmp0_serialDesc.ro('id', true);
    tmp0_serialDesc.ro('name', true);
    tmp0_serialDesc.ro('birthDate', true);
    tmp0_serialDesc.ro('gender', true);
    tmp0_serialDesc.ro('telecom', true);
    tmp0_serialDesc.ro('address', true);
    tmp0_serialDesc.ro('contact', true);
    this.w1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).de = function () {
    return this.w1d_1;
  };
  protoOf($serializer_14).gp = function () {
    var tmp0_cached = Companion_getInstance_19().v1d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2]), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5]), get_nullable(tmp0_cached[6]), get_nullable(tmp0_cached[7])];
  };
  protoOf($serializer_14).fe = function (decoder) {
    var tmp0_desc = this.w1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.eh(tmp0_desc);
    var tmp13_cached = Companion_getInstance_19().v1d_1;
    if (tmp12_input.uh()) {
      tmp4_local0 = tmp12_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.sh(tmp0_desc, 2, tmp13_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.sh(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.sh(tmp0_desc, 5, tmp13_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.sh(tmp0_desc, 6, tmp13_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.sh(tmp0_desc, 7, tmp13_cached[7], tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.sh(tmp0_desc, 2, tmp13_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.sh(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.sh(tmp0_desc, 5, tmp13_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.sh(tmp0_desc, 6, tmp13_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.sh(tmp0_desc, 7, tmp13_cached[7], tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.fh(tmp0_desc);
    return Patient_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_14).x1d = function (encoder, value) {
    var tmp0_desc = this.w1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().v1d_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.g1a_1 === 'Patient')) {
      tmp1_output.ti(tmp0_desc, 0, value.g1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.h1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.h1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.i1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, tmp2_cached[2], value.i1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.j1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, StringSerializer_getInstance(), value.j1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !(value.k1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 4, StringSerializer_getInstance(), value.k1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 5) ? true : !(value.l1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 5, tmp2_cached[5], value.l1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 6) ? true : !(value.m1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 6, tmp2_cached[6], value.m1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 7) ? true : !(value.n1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 7, tmp2_cached[7], value.n1a_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_14).ee = function (encoder, value) {
    return this.x1d(encoder, value instanceof Patient ? value : THROW_CCE());
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function Patient_init_$Init$(seen1, resourceType, id, name, birthDate, gender, telecom, address, contact, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_14().w1d_1);
    }
    if (0 === (seen1 & 1))
      $this.g1a_1 = 'Patient';
    else
      $this.g1a_1 = resourceType;
    if (0 === (seen1 & 2))
      $this.h1a_1 = null;
    else
      $this.h1a_1 = id;
    if (0 === (seen1 & 4))
      $this.i1a_1 = null;
    else
      $this.i1a_1 = name;
    if (0 === (seen1 & 8))
      $this.j1a_1 = null;
    else
      $this.j1a_1 = birthDate;
    if (0 === (seen1 & 16))
      $this.k1a_1 = null;
    else
      $this.k1a_1 = gender;
    if (0 === (seen1 & 32))
      $this.l1a_1 = null;
    else
      $this.l1a_1 = telecom;
    if (0 === (seen1 & 64))
      $this.m1a_1 = null;
    else
      $this.m1a_1 = address;
    if (0 === (seen1 & 128))
      $this.n1a_1 = null;
    else
      $this.n1a_1 = contact;
    return $this;
  }
  function Patient_init_$Create$(seen1, resourceType, id, name, birthDate, gender, telecom, address, contact, serializationConstructorMarker) {
    return Patient_init_$Init$(seen1, resourceType, id, name, birthDate, gender, telecom, address, contact, serializationConstructorMarker, objectCreate(protoOf(Patient)));
  }
  function Patient(resourceType, id, name, birthDate, gender, telecom, address, contact) {
    Companion_getInstance_19();
    resourceType = resourceType === VOID ? 'Patient' : resourceType;
    id = id === VOID ? null : id;
    name = name === VOID ? null : name;
    birthDate = birthDate === VOID ? null : birthDate;
    gender = gender === VOID ? null : gender;
    telecom = telecom === VOID ? null : telecom;
    address = address === VOID ? null : address;
    contact = contact === VOID ? null : contact;
    this.g1a_1 = resourceType;
    this.h1a_1 = id;
    this.i1a_1 = name;
    this.j1a_1 = birthDate;
    this.k1a_1 = gender;
    this.l1a_1 = telecom;
    this.m1a_1 = address;
    this.n1a_1 = contact;
  }
  protoOf(Patient).toString = function () {
    return 'Patient(resourceType=' + this.g1a_1 + ', id=' + this.h1a_1 + ', name=' + this.i1a_1 + ', birthDate=' + this.j1a_1 + ', gender=' + this.k1a_1 + ', telecom=' + this.l1a_1 + ', address=' + this.m1a_1 + ', contact=' + this.n1a_1 + ')';
  };
  protoOf(Patient).hashCode = function () {
    var result = getStringHashCode(this.g1a_1);
    result = imul(result, 31) + (this.h1a_1 == null ? 0 : getStringHashCode(this.h1a_1)) | 0;
    result = imul(result, 31) + (this.i1a_1 == null ? 0 : hashCode(this.i1a_1)) | 0;
    result = imul(result, 31) + (this.j1a_1 == null ? 0 : getStringHashCode(this.j1a_1)) | 0;
    result = imul(result, 31) + (this.k1a_1 == null ? 0 : getStringHashCode(this.k1a_1)) | 0;
    result = imul(result, 31) + (this.l1a_1 == null ? 0 : hashCode(this.l1a_1)) | 0;
    result = imul(result, 31) + (this.m1a_1 == null ? 0 : hashCode(this.m1a_1)) | 0;
    result = imul(result, 31) + (this.n1a_1 == null ? 0 : hashCode(this.n1a_1)) | 0;
    return result;
  };
  protoOf(Patient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Patient))
      return false;
    var tmp0_other_with_cast = other instanceof Patient ? other : THROW_CCE();
    if (!(this.g1a_1 === tmp0_other_with_cast.g1a_1))
      return false;
    if (!(this.h1a_1 == tmp0_other_with_cast.h1a_1))
      return false;
    if (!equals(this.i1a_1, tmp0_other_with_cast.i1a_1))
      return false;
    if (!(this.j1a_1 == tmp0_other_with_cast.j1a_1))
      return false;
    if (!(this.k1a_1 == tmp0_other_with_cast.k1a_1))
      return false;
    if (!equals(this.l1a_1, tmp0_other_with_cast.l1a_1))
      return false;
    if (!equals(this.m1a_1, tmp0_other_with_cast.m1a_1))
      return false;
    if (!equals(this.n1a_1, tmp0_other_with_cast.n1a_1))
      return false;
    return true;
  };
  function Companion_18() {
    Companion_instance_18 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y1d_1 = [new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance()), null];
  }
  var Companion_instance_18;
  function Companion_getInstance_20() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.HumanName', this, 3);
    tmp0_serialDesc.ro('prefix', true);
    tmp0_serialDesc.ro('given', true);
    tmp0_serialDesc.ro('family', true);
    this.z1d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).de = function () {
    return this.z1d_1;
  };
  protoOf($serializer_15).gp = function () {
    var tmp0_cached = Companion_getInstance_20().y1d_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(tmp0_cached[1]), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_15).fe = function (decoder) {
    var tmp0_desc = this.z1d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    var tmp8_cached = Companion_getInstance_20().y1d_1;
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, tmp8_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return HumanName_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_15).a1e = function (encoder, value) {
    var tmp0_desc = this.z1d_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().y1d_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.o1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, tmp2_cached[0], value.o1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.p1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, tmp2_cached[1], value.p1a_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.q1a_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, StringSerializer_getInstance(), value.q1a_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_15).ee = function (encoder, value) {
    return this.a1e(encoder, value instanceof HumanName ? value : THROW_CCE());
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function HumanName_init_$Init$(seen1, prefix, given, family, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_15().z1d_1);
    }
    if (0 === (seen1 & 1))
      $this.o1a_1 = null;
    else
      $this.o1a_1 = prefix;
    if (0 === (seen1 & 2))
      $this.p1a_1 = null;
    else
      $this.p1a_1 = given;
    if (0 === (seen1 & 4))
      $this.q1a_1 = null;
    else
      $this.q1a_1 = family;
    return $this;
  }
  function HumanName_init_$Create$(seen1, prefix, given, family, serializationConstructorMarker) {
    return HumanName_init_$Init$(seen1, prefix, given, family, serializationConstructorMarker, objectCreate(protoOf(HumanName)));
  }
  function HumanName(prefix, given, family) {
    Companion_getInstance_20();
    prefix = prefix === VOID ? null : prefix;
    given = given === VOID ? null : given;
    family = family === VOID ? null : family;
    this.o1a_1 = prefix;
    this.p1a_1 = given;
    this.q1a_1 = family;
  }
  protoOf(HumanName).toString = function () {
    return 'HumanName(prefix=' + this.o1a_1 + ', given=' + this.p1a_1 + ', family=' + this.q1a_1 + ')';
  };
  protoOf(HumanName).hashCode = function () {
    var result = this.o1a_1 == null ? 0 : hashCode(this.o1a_1);
    result = imul(result, 31) + (this.p1a_1 == null ? 0 : hashCode(this.p1a_1)) | 0;
    result = imul(result, 31) + (this.q1a_1 == null ? 0 : getStringHashCode(this.q1a_1)) | 0;
    return result;
  };
  protoOf(HumanName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HumanName))
      return false;
    var tmp0_other_with_cast = other instanceof HumanName ? other : THROW_CCE();
    if (!equals(this.o1a_1, tmp0_other_with_cast.o1a_1))
      return false;
    if (!equals(this.p1a_1, tmp0_other_with_cast.p1a_1))
      return false;
    if (!(this.q1a_1 == tmp0_other_with_cast.q1a_1))
      return false;
    return true;
  };
  function Companion_19() {
  }
  var Companion_instance_19;
  function Companion_getInstance_21() {
    return Companion_instance_19;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.ContactPoint', this, 3);
    tmp0_serialDesc.ro('system', true);
    tmp0_serialDesc.ro('use', true);
    tmp0_serialDesc.ro('value', true);
    this.b1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).de = function () {
    return this.b1e_1;
  };
  protoOf($serializer_16).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_16).fe = function (decoder) {
    var tmp0_desc = this.b1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return ContactPoint_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_16).c1e = function (encoder, value) {
    var tmp0_desc = this.b1e_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.d1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.d1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.e1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.e1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.f1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, StringSerializer_getInstance(), value.f1e_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_16).ee = function (encoder, value) {
    return this.c1e(encoder, value instanceof ContactPoint ? value : THROW_CCE());
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function ContactPoint_init_$Init$(seen1, system, use, value, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_16().b1e_1);
    }
    if (0 === (seen1 & 1))
      $this.d1e_1 = null;
    else
      $this.d1e_1 = system;
    if (0 === (seen1 & 2))
      $this.e1e_1 = null;
    else
      $this.e1e_1 = use;
    if (0 === (seen1 & 4))
      $this.f1e_1 = null;
    else
      $this.f1e_1 = value;
    return $this;
  }
  function ContactPoint_init_$Create$(seen1, system, use, value, serializationConstructorMarker) {
    return ContactPoint_init_$Init$(seen1, system, use, value, serializationConstructorMarker, objectCreate(protoOf(ContactPoint)));
  }
  function ContactPoint(system, use, value) {
    system = system === VOID ? null : system;
    use = use === VOID ? null : use;
    value = value === VOID ? null : value;
    this.d1e_1 = system;
    this.e1e_1 = use;
    this.f1e_1 = value;
  }
  protoOf(ContactPoint).toString = function () {
    return 'ContactPoint(system=' + this.d1e_1 + ', use=' + this.e1e_1 + ', value=' + this.f1e_1 + ')';
  };
  protoOf(ContactPoint).hashCode = function () {
    var result = this.d1e_1 == null ? 0 : getStringHashCode(this.d1e_1);
    result = imul(result, 31) + (this.e1e_1 == null ? 0 : getStringHashCode(this.e1e_1)) | 0;
    result = imul(result, 31) + (this.f1e_1 == null ? 0 : getStringHashCode(this.f1e_1)) | 0;
    return result;
  };
  protoOf(ContactPoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContactPoint))
      return false;
    var tmp0_other_with_cast = other instanceof ContactPoint ? other : THROW_CCE();
    if (!(this.d1e_1 == tmp0_other_with_cast.d1e_1))
      return false;
    if (!(this.e1e_1 == tmp0_other_with_cast.e1e_1))
      return false;
    if (!(this.f1e_1 == tmp0_other_with_cast.f1e_1))
      return false;
    return true;
  };
  function Companion_20() {
    Companion_instance_20 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g1e_1 = [null, new ArrayListSerializer(StringSerializer_getInstance()), null, null, null, null];
  }
  var Companion_instance_20;
  function Companion_getInstance_22() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Address', this, 6);
    tmp0_serialDesc.ro('use', true);
    tmp0_serialDesc.ro('line', true);
    tmp0_serialDesc.ro('city', true);
    tmp0_serialDesc.ro('state', true);
    tmp0_serialDesc.ro('postalCode', true);
    tmp0_serialDesc.ro('country', true);
    this.h1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).de = function () {
    return this.h1e_1;
  };
  protoOf($serializer_17).gp = function () {
    var tmp0_cached = Companion_getInstance_22().g1e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[1]), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_17).fe = function (decoder) {
    var tmp0_desc = this.h1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.eh(tmp0_desc);
    var tmp11_cached = Companion_getInstance_22().g1e_1;
    if (tmp10_input.uh()) {
      tmp4_local0 = tmp10_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.sh(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.sh(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.sh(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.sh(tmp0_desc, 1, tmp11_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.sh(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.sh(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.fh(tmp0_desc);
    return Address_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_17).i1e = function (encoder, value) {
    var tmp0_desc = this.h1e_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().g1e_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.j1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.j1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.k1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, tmp2_cached[1], value.k1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.l1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, StringSerializer_getInstance(), value.l1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.m1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, StringSerializer_getInstance(), value.m1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !(value.n1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 4, StringSerializer_getInstance(), value.n1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 5) ? true : !(value.o1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 5, StringSerializer_getInstance(), value.o1e_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_17).ee = function (encoder, value) {
    return this.i1e(encoder, value instanceof Address ? value : THROW_CCE());
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function Address_init_$Init$(seen1, use, line, city, state, postalCode, country, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_17().h1e_1);
    }
    if (0 === (seen1 & 1))
      $this.j1e_1 = null;
    else
      $this.j1e_1 = use;
    if (0 === (seen1 & 2))
      $this.k1e_1 = null;
    else
      $this.k1e_1 = line;
    if (0 === (seen1 & 4))
      $this.l1e_1 = null;
    else
      $this.l1e_1 = city;
    if (0 === (seen1 & 8))
      $this.m1e_1 = null;
    else
      $this.m1e_1 = state;
    if (0 === (seen1 & 16))
      $this.n1e_1 = null;
    else
      $this.n1e_1 = postalCode;
    if (0 === (seen1 & 32))
      $this.o1e_1 = null;
    else
      $this.o1e_1 = country;
    return $this;
  }
  function Address_init_$Create$(seen1, use, line, city, state, postalCode, country, serializationConstructorMarker) {
    return Address_init_$Init$(seen1, use, line, city, state, postalCode, country, serializationConstructorMarker, objectCreate(protoOf(Address)));
  }
  function Address(use, line, city, state, postalCode, country) {
    Companion_getInstance_22();
    use = use === VOID ? null : use;
    line = line === VOID ? null : line;
    city = city === VOID ? null : city;
    state = state === VOID ? null : state;
    postalCode = postalCode === VOID ? null : postalCode;
    country = country === VOID ? null : country;
    this.j1e_1 = use;
    this.k1e_1 = line;
    this.l1e_1 = city;
    this.m1e_1 = state;
    this.n1e_1 = postalCode;
    this.o1e_1 = country;
  }
  protoOf(Address).toString = function () {
    return 'Address(use=' + this.j1e_1 + ', line=' + this.k1e_1 + ', city=' + this.l1e_1 + ', state=' + this.m1e_1 + ', postalCode=' + this.n1e_1 + ', country=' + this.o1e_1 + ')';
  };
  protoOf(Address).hashCode = function () {
    var result = this.j1e_1 == null ? 0 : getStringHashCode(this.j1e_1);
    result = imul(result, 31) + (this.k1e_1 == null ? 0 : hashCode(this.k1e_1)) | 0;
    result = imul(result, 31) + (this.l1e_1 == null ? 0 : getStringHashCode(this.l1e_1)) | 0;
    result = imul(result, 31) + (this.m1e_1 == null ? 0 : getStringHashCode(this.m1e_1)) | 0;
    result = imul(result, 31) + (this.n1e_1 == null ? 0 : getStringHashCode(this.n1e_1)) | 0;
    result = imul(result, 31) + (this.o1e_1 == null ? 0 : getStringHashCode(this.o1e_1)) | 0;
    return result;
  };
  protoOf(Address).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Address))
      return false;
    var tmp0_other_with_cast = other instanceof Address ? other : THROW_CCE();
    if (!(this.j1e_1 == tmp0_other_with_cast.j1e_1))
      return false;
    if (!equals(this.k1e_1, tmp0_other_with_cast.k1e_1))
      return false;
    if (!(this.l1e_1 == tmp0_other_with_cast.l1e_1))
      return false;
    if (!(this.m1e_1 == tmp0_other_with_cast.m1e_1))
      return false;
    if (!(this.n1e_1 == tmp0_other_with_cast.n1e_1))
      return false;
    if (!(this.o1e_1 == tmp0_other_with_cast.o1e_1))
      return false;
    return true;
  };
  function Companion_21() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p1e_1 = [new ArrayListSerializer($serializer_getInstance_11()), null, new ArrayListSerializer($serializer_getInstance_16()), null];
  }
  var Companion_instance_21;
  function Companion_getInstance_23() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.PatientContact', this, 4);
    tmp0_serialDesc.ro('relationship', true);
    tmp0_serialDesc.ro('name', true);
    tmp0_serialDesc.ro('telecom', true);
    tmp0_serialDesc.ro('address', true);
    this.q1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).de = function () {
    return this.q1e_1;
  };
  protoOf($serializer_18).gp = function () {
    var tmp0_cached = Companion_getInstance_23().p1e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable($serializer_getInstance_15()), get_nullable(tmp0_cached[2]), get_nullable($serializer_getInstance_17())];
  };
  protoOf($serializer_18).fe = function (decoder) {
    var tmp0_desc = this.q1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.eh(tmp0_desc);
    var tmp9_cached = Companion_getInstance_23().p1e_1;
    if (tmp8_input.uh()) {
      tmp4_local0 = tmp8_input.sh(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.sh(tmp0_desc, 1, $serializer_getInstance_15(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.sh(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.sh(tmp0_desc, 3, $serializer_getInstance_17(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.sh(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.sh(tmp0_desc, 1, $serializer_getInstance_15(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.sh(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.sh(tmp0_desc, 3, $serializer_getInstance_17(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.fh(tmp0_desc);
    return PatientContact_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_18).r1e = function (encoder, value) {
    var tmp0_desc = this.q1e_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().p1e_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.s1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, tmp2_cached[0], value.s1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.t1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, $serializer_getInstance_15(), value.t1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.u1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, tmp2_cached[2], value.u1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.v1e_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, $serializer_getInstance_17(), value.v1e_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_18).ee = function (encoder, value) {
    return this.r1e(encoder, value instanceof PatientContact ? value : THROW_CCE());
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function PatientContact_init_$Init$(seen1, relationship, name, telecom, address, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_18().q1e_1);
    }
    if (0 === (seen1 & 1))
      $this.s1e_1 = null;
    else
      $this.s1e_1 = relationship;
    if (0 === (seen1 & 2))
      $this.t1e_1 = null;
    else
      $this.t1e_1 = name;
    if (0 === (seen1 & 4))
      $this.u1e_1 = null;
    else
      $this.u1e_1 = telecom;
    if (0 === (seen1 & 8))
      $this.v1e_1 = null;
    else
      $this.v1e_1 = address;
    return $this;
  }
  function PatientContact_init_$Create$(seen1, relationship, name, telecom, address, serializationConstructorMarker) {
    return PatientContact_init_$Init$(seen1, relationship, name, telecom, address, serializationConstructorMarker, objectCreate(protoOf(PatientContact)));
  }
  function PatientContact(relationship, name, telecom, address) {
    Companion_getInstance_23();
    relationship = relationship === VOID ? null : relationship;
    name = name === VOID ? null : name;
    telecom = telecom === VOID ? null : telecom;
    address = address === VOID ? null : address;
    this.s1e_1 = relationship;
    this.t1e_1 = name;
    this.u1e_1 = telecom;
    this.v1e_1 = address;
  }
  protoOf(PatientContact).toString = function () {
    return 'PatientContact(relationship=' + this.s1e_1 + ', name=' + this.t1e_1 + ', telecom=' + this.u1e_1 + ', address=' + this.v1e_1 + ')';
  };
  protoOf(PatientContact).hashCode = function () {
    var result = this.s1e_1 == null ? 0 : hashCode(this.s1e_1);
    result = imul(result, 31) + (this.t1e_1 == null ? 0 : this.t1e_1.hashCode()) | 0;
    result = imul(result, 31) + (this.u1e_1 == null ? 0 : hashCode(this.u1e_1)) | 0;
    result = imul(result, 31) + (this.v1e_1 == null ? 0 : this.v1e_1.hashCode()) | 0;
    return result;
  };
  protoOf(PatientContact).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PatientContact))
      return false;
    var tmp0_other_with_cast = other instanceof PatientContact ? other : THROW_CCE();
    if (!equals(this.s1e_1, tmp0_other_with_cast.s1e_1))
      return false;
    if (!equals(this.t1e_1, tmp0_other_with_cast.t1e_1))
      return false;
    if (!equals(this.u1e_1, tmp0_other_with_cast.u1e_1))
      return false;
    if (!equals(this.v1e_1, tmp0_other_with_cast.v1e_1))
      return false;
    return true;
  };
  function Companion_22() {
    Companion_instance_22 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w1e_1 = [null, null, null, null, null, null, null, null, new ArrayListSerializer($serializer_getInstance_20()), new ArrayListSerializer($serializer_getInstance_22())];
  }
  var Companion_instance_22;
  function Companion_getInstance_24() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.AllergyIntolerance', this, 10);
    tmp0_serialDesc.ro('resourceType', true);
    tmp0_serialDesc.ro('id', true);
    tmp0_serialDesc.ro('clinicalStatus', true);
    tmp0_serialDesc.ro('verificationStatus', true);
    tmp0_serialDesc.ro('type', true);
    tmp0_serialDesc.ro('criticality', true);
    tmp0_serialDesc.ro('code', true);
    tmp0_serialDesc.ro('patient', true);
    tmp0_serialDesc.ro('reaction', true);
    tmp0_serialDesc.ro('note', true);
    this.x1e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).de = function () {
    return this.x1e_1;
  };
  protoOf($serializer_19).gp = function () {
    var tmp0_cached = Companion_getInstance_24().w1e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_11()), get_nullable($serializer_getInstance_11()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_11()), get_nullable($serializer_getInstance_10()), get_nullable(tmp0_cached[8]), get_nullable(tmp0_cached[9])];
  };
  protoOf($serializer_19).fe = function (decoder) {
    var tmp0_desc = this.x1e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.eh(tmp0_desc);
    var tmp15_cached = Companion_getInstance_24().w1e_1;
    if (tmp14_input.uh()) {
      tmp4_local0 = tmp14_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.sh(tmp0_desc, 2, $serializer_getInstance_11(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.sh(tmp0_desc, 3, $serializer_getInstance_11(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.sh(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.sh(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.sh(tmp0_desc, 6, $serializer_getInstance_11(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.sh(tmp0_desc, 7, $serializer_getInstance_10(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.sh(tmp0_desc, 8, tmp15_cached[8], tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.sh(tmp0_desc, 9, tmp15_cached[9], tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.sh(tmp0_desc, 2, $serializer_getInstance_11(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.sh(tmp0_desc, 3, $serializer_getInstance_11(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.sh(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.sh(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.sh(tmp0_desc, 6, $serializer_getInstance_11(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.sh(tmp0_desc, 7, $serializer_getInstance_10(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.sh(tmp0_desc, 8, tmp15_cached[8], tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.sh(tmp0_desc, 9, tmp15_cached[9], tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.fh(tmp0_desc);
    return AllergyIntolerance_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_19).y1e = function (encoder, value) {
    var tmp0_desc = this.x1e_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().w1e_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.z1e_1 === 'AllergyIntolerance')) {
      tmp1_output.ti(tmp0_desc, 0, value.z1e_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.a1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.a1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.b1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, $serializer_getInstance_11(), value.b1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.c1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, $serializer_getInstance_11(), value.c1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !(value.d1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 4, StringSerializer_getInstance(), value.d1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 5) ? true : !(value.e1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 5, StringSerializer_getInstance(), value.e1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 6) ? true : !(value.f1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 6, $serializer_getInstance_11(), value.f1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 7) ? true : !(value.g1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 7, $serializer_getInstance_10(), value.g1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 8) ? true : !(value.h1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 8, tmp2_cached[8], value.h1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 9) ? true : !(value.i1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 9, tmp2_cached[9], value.i1f_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_19).ee = function (encoder, value) {
    return this.y1e(encoder, value instanceof AllergyIntolerance ? value : THROW_CCE());
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function AllergyIntolerance_init_$Init$(seen1, resourceType, id, clinicalStatus, verificationStatus, type, criticality, code, patient, reaction, note, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_19().x1e_1);
    }
    if (0 === (seen1 & 1))
      $this.z1e_1 = 'AllergyIntolerance';
    else
      $this.z1e_1 = resourceType;
    if (0 === (seen1 & 2))
      $this.a1f_1 = null;
    else
      $this.a1f_1 = id;
    if (0 === (seen1 & 4))
      $this.b1f_1 = null;
    else
      $this.b1f_1 = clinicalStatus;
    if (0 === (seen1 & 8))
      $this.c1f_1 = null;
    else
      $this.c1f_1 = verificationStatus;
    if (0 === (seen1 & 16))
      $this.d1f_1 = null;
    else
      $this.d1f_1 = type;
    if (0 === (seen1 & 32))
      $this.e1f_1 = null;
    else
      $this.e1f_1 = criticality;
    if (0 === (seen1 & 64))
      $this.f1f_1 = null;
    else
      $this.f1f_1 = code;
    if (0 === (seen1 & 128))
      $this.g1f_1 = null;
    else
      $this.g1f_1 = patient;
    if (0 === (seen1 & 256))
      $this.h1f_1 = null;
    else
      $this.h1f_1 = reaction;
    if (0 === (seen1 & 512))
      $this.i1f_1 = null;
    else
      $this.i1f_1 = note;
    return $this;
  }
  function AllergyIntolerance_init_$Create$(seen1, resourceType, id, clinicalStatus, verificationStatus, type, criticality, code, patient, reaction, note, serializationConstructorMarker) {
    return AllergyIntolerance_init_$Init$(seen1, resourceType, id, clinicalStatus, verificationStatus, type, criticality, code, patient, reaction, note, serializationConstructorMarker, objectCreate(protoOf(AllergyIntolerance)));
  }
  function AllergyIntolerance(resourceType, id, clinicalStatus, verificationStatus, type, criticality, code, patient, reaction, note) {
    Companion_getInstance_24();
    resourceType = resourceType === VOID ? 'AllergyIntolerance' : resourceType;
    id = id === VOID ? null : id;
    clinicalStatus = clinicalStatus === VOID ? null : clinicalStatus;
    verificationStatus = verificationStatus === VOID ? null : verificationStatus;
    type = type === VOID ? null : type;
    criticality = criticality === VOID ? null : criticality;
    code = code === VOID ? null : code;
    patient = patient === VOID ? null : patient;
    reaction = reaction === VOID ? null : reaction;
    note = note === VOID ? null : note;
    this.z1e_1 = resourceType;
    this.a1f_1 = id;
    this.b1f_1 = clinicalStatus;
    this.c1f_1 = verificationStatus;
    this.d1f_1 = type;
    this.e1f_1 = criticality;
    this.f1f_1 = code;
    this.g1f_1 = patient;
    this.h1f_1 = reaction;
    this.i1f_1 = note;
  }
  protoOf(AllergyIntolerance).toString = function () {
    return 'AllergyIntolerance(resourceType=' + this.z1e_1 + ', id=' + this.a1f_1 + ', clinicalStatus=' + this.b1f_1 + ', verificationStatus=' + this.c1f_1 + ', type=' + this.d1f_1 + ', criticality=' + this.e1f_1 + ', code=' + this.f1f_1 + ', patient=' + this.g1f_1 + ', reaction=' + this.h1f_1 + ', note=' + this.i1f_1 + ')';
  };
  protoOf(AllergyIntolerance).hashCode = function () {
    var result = getStringHashCode(this.z1e_1);
    result = imul(result, 31) + (this.a1f_1 == null ? 0 : getStringHashCode(this.a1f_1)) | 0;
    result = imul(result, 31) + (this.b1f_1 == null ? 0 : this.b1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.c1f_1 == null ? 0 : this.c1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.d1f_1 == null ? 0 : getStringHashCode(this.d1f_1)) | 0;
    result = imul(result, 31) + (this.e1f_1 == null ? 0 : getStringHashCode(this.e1f_1)) | 0;
    result = imul(result, 31) + (this.f1f_1 == null ? 0 : this.f1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.g1f_1 == null ? 0 : this.g1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h1f_1 == null ? 0 : hashCode(this.h1f_1)) | 0;
    result = imul(result, 31) + (this.i1f_1 == null ? 0 : hashCode(this.i1f_1)) | 0;
    return result;
  };
  protoOf(AllergyIntolerance).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AllergyIntolerance))
      return false;
    var tmp0_other_with_cast = other instanceof AllergyIntolerance ? other : THROW_CCE();
    if (!(this.z1e_1 === tmp0_other_with_cast.z1e_1))
      return false;
    if (!(this.a1f_1 == tmp0_other_with_cast.a1f_1))
      return false;
    if (!equals(this.b1f_1, tmp0_other_with_cast.b1f_1))
      return false;
    if (!equals(this.c1f_1, tmp0_other_with_cast.c1f_1))
      return false;
    if (!(this.d1f_1 == tmp0_other_with_cast.d1f_1))
      return false;
    if (!(this.e1f_1 == tmp0_other_with_cast.e1f_1))
      return false;
    if (!equals(this.f1f_1, tmp0_other_with_cast.f1f_1))
      return false;
    if (!equals(this.g1f_1, tmp0_other_with_cast.g1f_1))
      return false;
    if (!equals(this.h1f_1, tmp0_other_with_cast.h1f_1))
      return false;
    if (!equals(this.i1f_1, tmp0_other_with_cast.i1f_1))
      return false;
    return true;
  };
  function Companion_23() {
    Companion_instance_23 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j1f_1 = [new ArrayListSerializer($serializer_getInstance_11()), null, new ArrayListSerializer($serializer_getInstance_22())];
  }
  var Companion_instance_23;
  function Companion_getInstance_25() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.AllergyIntoleranceReaction', this, 3);
    tmp0_serialDesc.ro('manifestation', true);
    tmp0_serialDesc.ro('severity', true);
    tmp0_serialDesc.ro('note', true);
    this.k1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).de = function () {
    return this.k1f_1;
  };
  protoOf($serializer_20).gp = function () {
    var tmp0_cached = Companion_getInstance_25().j1f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[2])];
  };
  protoOf($serializer_20).fe = function (decoder) {
    var tmp0_desc = this.k1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    var tmp8_cached = Companion_getInstance_25().j1f_1;
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, tmp8_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return AllergyIntoleranceReaction_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_20).l1f = function (encoder, value) {
    var tmp0_desc = this.k1f_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().j1f_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.m1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, tmp2_cached[0], value.m1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.n1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.n1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.o1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, tmp2_cached[2], value.o1f_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_20).ee = function (encoder, value) {
    return this.l1f(encoder, value instanceof AllergyIntoleranceReaction ? value : THROW_CCE());
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function AllergyIntoleranceReaction_init_$Init$(seen1, manifestation, severity, note, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_20().k1f_1);
    }
    if (0 === (seen1 & 1))
      $this.m1f_1 = null;
    else
      $this.m1f_1 = manifestation;
    if (0 === (seen1 & 2))
      $this.n1f_1 = null;
    else
      $this.n1f_1 = severity;
    if (0 === (seen1 & 4))
      $this.o1f_1 = null;
    else
      $this.o1f_1 = note;
    return $this;
  }
  function AllergyIntoleranceReaction_init_$Create$(seen1, manifestation, severity, note, serializationConstructorMarker) {
    return AllergyIntoleranceReaction_init_$Init$(seen1, manifestation, severity, note, serializationConstructorMarker, objectCreate(protoOf(AllergyIntoleranceReaction)));
  }
  function AllergyIntoleranceReaction(manifestation, severity, note) {
    Companion_getInstance_25();
    manifestation = manifestation === VOID ? null : manifestation;
    severity = severity === VOID ? null : severity;
    note = note === VOID ? null : note;
    this.m1f_1 = manifestation;
    this.n1f_1 = severity;
    this.o1f_1 = note;
  }
  protoOf(AllergyIntoleranceReaction).toString = function () {
    return 'AllergyIntoleranceReaction(manifestation=' + this.m1f_1 + ', severity=' + this.n1f_1 + ', note=' + this.o1f_1 + ')';
  };
  protoOf(AllergyIntoleranceReaction).hashCode = function () {
    var result = this.m1f_1 == null ? 0 : hashCode(this.m1f_1);
    result = imul(result, 31) + (this.n1f_1 == null ? 0 : getStringHashCode(this.n1f_1)) | 0;
    result = imul(result, 31) + (this.o1f_1 == null ? 0 : hashCode(this.o1f_1)) | 0;
    return result;
  };
  protoOf(AllergyIntoleranceReaction).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AllergyIntoleranceReaction))
      return false;
    var tmp0_other_with_cast = other instanceof AllergyIntoleranceReaction ? other : THROW_CCE();
    if (!equals(this.m1f_1, tmp0_other_with_cast.m1f_1))
      return false;
    if (!(this.n1f_1 == tmp0_other_with_cast.n1f_1))
      return false;
    if (!equals(this.o1f_1, tmp0_other_with_cast.o1f_1))
      return false;
    return true;
  };
  function Companion_24() {
  }
  var Companion_instance_24;
  function Companion_getInstance_26() {
    return Companion_instance_24;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Condition', this, 8);
    tmp0_serialDesc.ro('resourceType', true);
    tmp0_serialDesc.ro('id', true);
    tmp0_serialDesc.ro('clinicalStatus', true);
    tmp0_serialDesc.ro('verificationStatus', true);
    tmp0_serialDesc.ro('code', true);
    tmp0_serialDesc.ro('subject', true);
    tmp0_serialDesc.ro('onsetDateTime', true);
    tmp0_serialDesc.ro('severity', true);
    this.p1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).de = function () {
    return this.p1f_1;
  };
  protoOf($serializer_21).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_11()), get_nullable($serializer_getInstance_11()), get_nullable($serializer_getInstance_11()), get_nullable($serializer_getInstance_10()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_11())];
  };
  protoOf($serializer_21).fe = function (decoder) {
    var tmp0_desc = this.p1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.eh(tmp0_desc);
    if (tmp12_input.uh()) {
      tmp4_local0 = tmp12_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.sh(tmp0_desc, 2, $serializer_getInstance_11(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.sh(tmp0_desc, 3, $serializer_getInstance_11(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.sh(tmp0_desc, 4, $serializer_getInstance_11(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.sh(tmp0_desc, 5, $serializer_getInstance_10(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.sh(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.sh(tmp0_desc, 7, $serializer_getInstance_11(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.sh(tmp0_desc, 2, $serializer_getInstance_11(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.sh(tmp0_desc, 3, $serializer_getInstance_11(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.sh(tmp0_desc, 4, $serializer_getInstance_11(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.sh(tmp0_desc, 5, $serializer_getInstance_10(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.sh(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.sh(tmp0_desc, 7, $serializer_getInstance_11(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.fh(tmp0_desc);
    return Condition_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_21).q1f = function (encoder, value) {
    var tmp0_desc = this.p1f_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.r1f_1 === 'Condition')) {
      tmp1_output.ti(tmp0_desc, 0, value.r1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.s1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.s1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.t1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, $serializer_getInstance_11(), value.t1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.u1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, $serializer_getInstance_11(), value.u1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !(value.v1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 4, $serializer_getInstance_11(), value.v1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 5) ? true : !(value.w1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 5, $serializer_getInstance_10(), value.w1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 6) ? true : !(value.x1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 6, StringSerializer_getInstance(), value.x1f_1);
    }
    if (tmp1_output.bj(tmp0_desc, 7) ? true : !(value.y1f_1 == null)) {
      tmp1_output.xi(tmp0_desc, 7, $serializer_getInstance_11(), value.y1f_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_21).ee = function (encoder, value) {
    return this.q1f(encoder, value instanceof Condition ? value : THROW_CCE());
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function Condition_init_$Init$(seen1, resourceType, id, clinicalStatus, verificationStatus, code, subject, onsetDateTime, severity, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_21().p1f_1);
    }
    if (0 === (seen1 & 1))
      $this.r1f_1 = 'Condition';
    else
      $this.r1f_1 = resourceType;
    if (0 === (seen1 & 2))
      $this.s1f_1 = null;
    else
      $this.s1f_1 = id;
    if (0 === (seen1 & 4))
      $this.t1f_1 = null;
    else
      $this.t1f_1 = clinicalStatus;
    if (0 === (seen1 & 8))
      $this.u1f_1 = null;
    else
      $this.u1f_1 = verificationStatus;
    if (0 === (seen1 & 16))
      $this.v1f_1 = null;
    else
      $this.v1f_1 = code;
    if (0 === (seen1 & 32))
      $this.w1f_1 = null;
    else
      $this.w1f_1 = subject;
    if (0 === (seen1 & 64))
      $this.x1f_1 = null;
    else
      $this.x1f_1 = onsetDateTime;
    if (0 === (seen1 & 128))
      $this.y1f_1 = null;
    else
      $this.y1f_1 = severity;
    return $this;
  }
  function Condition_init_$Create$(seen1, resourceType, id, clinicalStatus, verificationStatus, code, subject, onsetDateTime, severity, serializationConstructorMarker) {
    return Condition_init_$Init$(seen1, resourceType, id, clinicalStatus, verificationStatus, code, subject, onsetDateTime, severity, serializationConstructorMarker, objectCreate(protoOf(Condition)));
  }
  function Condition(resourceType, id, clinicalStatus, verificationStatus, code, subject, onsetDateTime, severity) {
    resourceType = resourceType === VOID ? 'Condition' : resourceType;
    id = id === VOID ? null : id;
    clinicalStatus = clinicalStatus === VOID ? null : clinicalStatus;
    verificationStatus = verificationStatus === VOID ? null : verificationStatus;
    code = code === VOID ? null : code;
    subject = subject === VOID ? null : subject;
    onsetDateTime = onsetDateTime === VOID ? null : onsetDateTime;
    severity = severity === VOID ? null : severity;
    this.r1f_1 = resourceType;
    this.s1f_1 = id;
    this.t1f_1 = clinicalStatus;
    this.u1f_1 = verificationStatus;
    this.v1f_1 = code;
    this.w1f_1 = subject;
    this.x1f_1 = onsetDateTime;
    this.y1f_1 = severity;
  }
  protoOf(Condition).toString = function () {
    return 'Condition(resourceType=' + this.r1f_1 + ', id=' + this.s1f_1 + ', clinicalStatus=' + this.t1f_1 + ', verificationStatus=' + this.u1f_1 + ', code=' + this.v1f_1 + ', subject=' + this.w1f_1 + ', onsetDateTime=' + this.x1f_1 + ', severity=' + this.y1f_1 + ')';
  };
  protoOf(Condition).hashCode = function () {
    var result = getStringHashCode(this.r1f_1);
    result = imul(result, 31) + (this.s1f_1 == null ? 0 : getStringHashCode(this.s1f_1)) | 0;
    result = imul(result, 31) + (this.t1f_1 == null ? 0 : this.t1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.u1f_1 == null ? 0 : this.u1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.v1f_1 == null ? 0 : this.v1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.w1f_1 == null ? 0 : this.w1f_1.hashCode()) | 0;
    result = imul(result, 31) + (this.x1f_1 == null ? 0 : getStringHashCode(this.x1f_1)) | 0;
    result = imul(result, 31) + (this.y1f_1 == null ? 0 : this.y1f_1.hashCode()) | 0;
    return result;
  };
  protoOf(Condition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Condition))
      return false;
    var tmp0_other_with_cast = other instanceof Condition ? other : THROW_CCE();
    if (!(this.r1f_1 === tmp0_other_with_cast.r1f_1))
      return false;
    if (!(this.s1f_1 == tmp0_other_with_cast.s1f_1))
      return false;
    if (!equals(this.t1f_1, tmp0_other_with_cast.t1f_1))
      return false;
    if (!equals(this.u1f_1, tmp0_other_with_cast.u1f_1))
      return false;
    if (!equals(this.v1f_1, tmp0_other_with_cast.v1f_1))
      return false;
    if (!equals(this.w1f_1, tmp0_other_with_cast.w1f_1))
      return false;
    if (!(this.x1f_1 == tmp0_other_with_cast.x1f_1))
      return false;
    if (!equals(this.y1f_1, tmp0_other_with_cast.y1f_1))
      return false;
    return true;
  };
  function Companion_25() {
  }
  var Companion_instance_25;
  function Companion_getInstance_27() {
    return Companion_instance_25;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.fhir.Annotation', this, 3);
    tmp0_serialDesc.ro('text', true);
    tmp0_serialDesc.ro('authorString', true);
    tmp0_serialDesc.ro('time', true);
    this.z1f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).de = function () {
    return this.z1f_1;
  };
  protoOf($serializer_22).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_22).fe = function (decoder) {
    var tmp0_desc = this.z1f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return Annotation_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).a1g = function (encoder, value) {
    var tmp0_desc = this.z1f_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.b1g_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.b1g_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.c1g_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.c1g_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.d1g_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, StringSerializer_getInstance(), value.d1g_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_22).ee = function (encoder, value) {
    return this.a1g(encoder, value instanceof Annotation ? value : THROW_CCE());
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function Annotation_init_$Init$(seen1, text, authorString, time, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_22().z1f_1);
    }
    if (0 === (seen1 & 1))
      $this.b1g_1 = null;
    else
      $this.b1g_1 = text;
    if (0 === (seen1 & 2))
      $this.c1g_1 = null;
    else
      $this.c1g_1 = authorString;
    if (0 === (seen1 & 4))
      $this.d1g_1 = null;
    else
      $this.d1g_1 = time;
    return $this;
  }
  function Annotation_init_$Create$(seen1, text, authorString, time, serializationConstructorMarker) {
    return Annotation_init_$Init$(seen1, text, authorString, time, serializationConstructorMarker, objectCreate(protoOf(Annotation)));
  }
  function Annotation(text, authorString, time) {
    text = text === VOID ? null : text;
    authorString = authorString === VOID ? null : authorString;
    time = time === VOID ? null : time;
    this.b1g_1 = text;
    this.c1g_1 = authorString;
    this.d1g_1 = time;
  }
  protoOf(Annotation).toString = function () {
    return 'Annotation(text=' + this.b1g_1 + ', authorString=' + this.c1g_1 + ', time=' + this.d1g_1 + ')';
  };
  protoOf(Annotation).hashCode = function () {
    var result = this.b1g_1 == null ? 0 : getStringHashCode(this.b1g_1);
    result = imul(result, 31) + (this.c1g_1 == null ? 0 : getStringHashCode(this.c1g_1)) | 0;
    result = imul(result, 31) + (this.d1g_1 == null ? 0 : getStringHashCode(this.d1g_1)) | 0;
    return result;
  };
  protoOf(Annotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Annotation))
      return false;
    var tmp0_other_with_cast = other instanceof Annotation ? other : THROW_CCE();
    if (!(this.b1g_1 == tmp0_other_with_cast.b1g_1))
      return false;
    if (!(this.c1g_1 == tmp0_other_with_cast.c1g_1))
      return false;
    if (!(this.d1g_1 == tmp0_other_with_cast.d1g_1))
      return false;
    return true;
  };
  function processPatientSection($this, patientEntries) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = patientEntries.p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processPatientSection.<anonymous>' call
      var tmp0_safe_receiver = element.x19_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processPatientSection.<anonymous>.<anonymous>' call
        var tmp_0;
        try {
          var patient = parsePatient($this, tmp0_safe_receiver);
          var tmp_1;
          if (!(patient == null)) {
            var renderer = new PatientRenderer();
            var component = renderer.g1g(patient, $this.e1g_1);
            tmp_1 = new EnhancedResourceDisplay('Patient', tmp0_safe_receiver.z19_1, component, $this.e1g_1.k1g_1 ? $this.f1g_1.dy(Companion_instance_10.i10(), tmp0_safe_receiver) : null);
          } else {
            tmp_1 = null;
          }
          tmp_0 = tmp_1;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            var e = $p;
            tmp_2 = null;
          } else {
            throw $p;
          }
          tmp_0 = tmp_2;
        }
        tmp = tmp_0;
      }
      var tmp0_safe_receiver_0 = tmp;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.m(tmp0_safe_receiver_0);
      }
    }
    var patientResources = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp$ret$6 = !patientResources.v();
    return new EnhancedSectionContent('Patient', tmp$ret$6, false, VOID, VOID, patientResources);
  }
  function processSection($this, section, bundle, title) {
    var tmp0_safe_receiver = section.d1b_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.p();
      while (tmp0_iterator.q()) {
        var element = tmp0_iterator.r();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processSection.<anonymous>' call
        var tmp0_safe_receiver_0 = element.j1b_1;
        var tmp_0;
        if (tmp0_safe_receiver_0 == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processSection.<anonymous>.<anonymous>' call
          var tmp0_elvis_lhs = bundle.u1a_1;
          var tmp1_safe_receiver = getEntry(tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs, tmp0_safe_receiver_0);
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processSection.<anonymous>.<anonymous>.<anonymous>' call
            tmp_1 = processResourceEntry_0($this, tmp1_safe_receiver);
          }
          tmp_0 = tmp_1;
        }
        var tmp0_safe_receiver_1 = tmp_0;
        if (tmp0_safe_receiver_1 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          destination.m(tmp0_safe_receiver_1);
        }
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    var sectionResources = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var hasStructuredData = !sectionResources.v();
    var tmp_2;
    if ($this.e1g_1.h1g_1.equals(RenderingMode_TEXT_getInstance())) {
      tmp_2 = true;
    } else {
      var tmp_3;
      if (!hasStructuredData) {
        var tmp2_safe_receiver = section.c1b_1;
        tmp_3 = !((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.u1d_1) == null);
      } else {
        tmp_3 = false;
      }
      tmp_2 = tmp_3;
    }
    var useTextMode = tmp_2;
    var tmp_4;
    if (hasStructuredData) {
      tmp_4 = true;
    } else {
      var tmp3_safe_receiver = section.c1b_1;
      tmp_4 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.u1d_1) == null);
    }
    var tmp_5 = tmp_4;
    var tmp4_safe_receiver = section.c1b_1;
    return new EnhancedSectionContent(title, tmp_5, useTextMode, tmp4_safe_receiver == null ? null : tmp4_safe_receiver.u1d_1, VOID, sectionResources);
  }
  function processResourceEntry_0($this, entry) {
    var tmp0_elvis_lhs = entry.x19_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var resource = tmp;
    var tmp_0;
    switch (resource.y19_1) {
      case 'Patient':
        var tmp2_safe_receiver = parsePatient($this, resource);
        var tmp_1;
        if (tmp2_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processResourceEntry.<anonymous>' call
          tmp_1 = (new PatientRenderer()).g1g(tmp2_safe_receiver, $this.e1g_1);
        }

        tmp_0 = tmp_1;
        break;
      case 'AllergyIntolerance':
        var tmp3_safe_receiver = parseAllergyIntolerance($this, resource);
        var tmp_2;
        if (tmp3_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processResourceEntry.<anonymous>' call
          tmp_2 = (new AllergyIntoleranceRenderer()).o1g(tmp3_safe_receiver, $this.e1g_1);
        }

        tmp_0 = tmp_2;
        break;
      case 'Condition':
        var tmp4_safe_receiver = parseCondition($this, resource);
        var tmp_3;
        if (tmp4_safe_receiver == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processResourceEntry.<anonymous>' call
          tmp_3 = (new ConditionRenderer()).p1g(tmp4_safe_receiver, $this.e1g_1);
        }

        tmp_0 = tmp_3;
        break;
      case 'MedicationRequest':
      case 'MedicationStatement':
        var tmp5_safe_receiver = parseMedication($this, resource);
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processResourceEntry.<anonymous>' call
          tmp_4 = (new MedicationRenderer()).q1g(tmp5_safe_receiver, $this.e1g_1);
        }

        tmp_0 = tmp_4;
        break;
      default:
        tmp_0 = createGenericResourceComponent($this, resource);
        break;
    }
    var tmp6_elvis_lhs = tmp_0;
    var component = tmp6_elvis_lhs == null ? createGenericResourceComponent($this, resource) : tmp6_elvis_lhs;
    return new EnhancedResourceDisplay(resource.y19_1, resource.z19_1, component, $this.e1g_1.k1g_1 ? $this.f1g_1.dy(Companion_instance_10.i10(), resource) : null);
  }
  function createGenericResourceComponent($this, resource) {
    return new ComponentView(ComponentType_CONTAINER_getInstance(), new ComponentProps(), listOf([new ComponentView(ComponentType_BADGE_getInstance(), new ComponentProps(resource.y19_1, 'light')), new ComponentView(ComponentType_TEXT_getInstance(), new ComponentProps('Unsupported resource type: ' + resource.y19_1))]));
  }
  function parseComposition($this, resource) {
    var tmp;
    try {
      var jsonString = $this.f1g_1.dy(Companion_instance_10.i10(), resource);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = $this.f1g_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Composition), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.ey(tmp$ret$1, jsonString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = new Composition();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function parsePatient($this, resource) {
    var tmp;
    try {
      var jsonString = $this.f1g_1.dy(Companion_instance_10.i10(), resource);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = $this.f1g_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Patient), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.ey(tmp$ret$1, jsonString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function parseAllergyIntolerance($this, resource) {
    var tmp;
    try {
      var jsonString = $this.f1g_1.dy(Companion_instance_10.i10(), resource);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = $this.f1g_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(AllergyIntolerance), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.ey(tmp$ret$1, jsonString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function parseCondition($this, resource) {
    var tmp;
    try {
      var jsonString = $this.f1g_1.dy(Companion_instance_10.i10(), resource);
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = $this.f1g_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Condition), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp = this_0.ey(tmp$ret$1, jsonString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function parseMedication($this, resource) {
    var tmp;
    try {
      var jsonString = $this.f1g_1.dy(Companion_instance_10.i10(), resource);
      var jsonElement = $this.f1g_1.fy(jsonString);
      tmp = get_jsonObject(jsonElement);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function EnhancedIpsProcessor$json$lambda($this$Json) {
    $this$Json.xy_1 = true;
    $this$Json.az_1 = true;
    return Unit_instance;
  }
  function EnhancedIpsProcessor(config) {
    config = config === VOID ? new RenderingConfig() : config;
    this.e1g_1 = config;
    var tmp = this;
    tmp.f1g_1 = Json(VOID, EnhancedIpsProcessor$json$lambda);
  }
  protoOf(EnhancedIpsProcessor).r1a = function (bundle) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var sections = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableListOf' call
    var warnings = ArrayList_init_$Create$();
    try {
      var tmp0_safe_receiver = bundle.u1a_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_safe_receiver.p();
        while (tmp0_iterator.q()) {
          var element = tmp0_iterator.r();
          // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processBundle.<anonymous>' call
          var tmp0_safe_receiver_0 = element.x19_1;
          if ((tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.y19_1) === 'Composition') {
            destination.m(element);
          }
        }
        tmp = destination;
      }
      var compositions = tmp;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (compositions == null ? true : compositions.v()) {
        errors.m('No Composition resource found in bundle');
        return new IpsRenderingResult(emptyMap(), emptyList(), errors, warnings);
      }
      var tmp1_safe_receiver = bundle.u1a_1;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination_0 = ArrayList_init_$Create$();
        var tmp0_iterator_0 = tmp1_safe_receiver.p();
        while (tmp0_iterator_0.q()) {
          var element_0 = tmp0_iterator_0.r();
          // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processBundle.<anonymous>' call
          var tmp0_safe_receiver_1 = element_0.x19_1;
          if ((tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.y19_1) === 'Patient') {
            destination_0.m(element_0);
          }
        }
        tmp_0 = destination_0;
      }
      var patients = tmp_0;
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(patients == null ? true : patients.v())) {
        // Inline function 'kotlin.collections.set' call
        var value = processPatientSection(this, patients);
        sections.n1('Patient', value);
      }
      var composition = first(compositions).x19_1;
      if (!(composition == null)) {
        var compositionData = parseComposition(this, composition);
        var tmp2_safe_receiver = compositionData.z1a_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_1 = tmp2_safe_receiver.p();
          while (tmp0_iterator_1.q()) {
            var element_1 = tmp0_iterator_1.r();
            // Inline function 'com.moreinformatics.ipsviewer.rendering.EnhancedIpsProcessor.processBundle.<anonymous>' call
            var tmp3_elvis_lhs = element_1.a1b_1;
            var tmp_1;
            if (tmp3_elvis_lhs == null) {
              var tmp0_safe_receiver_2 = element_1.b1b_1;
              var tmp1_safe_receiver_0 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.e1b_1;
              var tmp2_safe_receiver_0 = tmp1_safe_receiver_0 == null ? null : firstOrNull(tmp1_safe_receiver_0);
              tmp_1 = tmp2_safe_receiver_0 == null ? null : tmp2_safe_receiver_0.i1b_1;
            } else {
              tmp_1 = tmp3_elvis_lhs;
            }
            var tmp4_elvis_lhs = tmp_1;
            var title = tmp4_elvis_lhs == null ? '[Untitled section]' : tmp4_elvis_lhs;
            // Inline function 'kotlin.collections.set' call
            var value_0 = processSection(this, element_1, bundle, title);
            sections.n1(title, value_0);
          }
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        errors.m('Error processing bundle: ' + e.message);
      } else {
        throw $p;
      }
    }
    return new IpsRenderingResult(sections, emptyList(), errors, warnings);
  };
  function Companion_26() {
    Companion_instance_26 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s1g_1 = [Companion_getInstance_29().i10(), null, null];
  }
  var Companion_instance_26;
  function Companion_getInstance_28() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.rendering.ComponentView', this, 3);
    tmp0_serialDesc.ro('type', false);
    tmp0_serialDesc.ro('props', false);
    tmp0_serialDesc.ro('children', true);
    this.t1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).de = function () {
    return this.t1g_1;
  };
  protoOf($serializer_23).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_28().s1g_1[0], $serializer_getInstance_24(), new ArrayListSerializer($serializer_getInstance_23())];
  };
  protoOf($serializer_23).fe = function (decoder) {
    var tmp0_desc = this.t1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.eh(tmp0_desc);
    var tmp8_cached = Companion_getInstance_28().s1g_1;
    if (tmp7_input.uh()) {
      tmp4_local0 = tmp7_input.qh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.qh(tmp0_desc, 1, $serializer_getInstance_24(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.qh(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance_23()), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.qh(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.qh(tmp0_desc, 1, $serializer_getInstance_24(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.qh(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance_23()), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.fh(tmp0_desc);
    return ComponentView_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_23).u1g = function (encoder, value) {
    var tmp0_desc = this.t1g_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().s1g_1;
    tmp1_output.vi(tmp0_desc, 0, tmp2_cached[0], value.v1g_1);
    tmp1_output.vi(tmp0_desc, 1, $serializer_getInstance_24(), value.w1g_1);
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !equals(value.x1g_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 2, new ArrayListSerializer($serializer_getInstance_23()), value.x1g_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_23).ee = function (encoder, value) {
    return this.u1g(encoder, value instanceof ComponentView ? value : THROW_CCE());
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function ComponentView_init_$Init$(seen1, type, props, children, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_23().t1g_1);
    }
    $this.v1g_1 = type;
    $this.w1g_1 = props;
    if (0 === (seen1 & 4))
      $this.x1g_1 = emptyList();
    else
      $this.x1g_1 = children;
    return $this;
  }
  function ComponentView_init_$Create$(seen1, type, props, children, serializationConstructorMarker) {
    return ComponentView_init_$Init$(seen1, type, props, children, serializationConstructorMarker, objectCreate(protoOf(ComponentView)));
  }
  function ComponentView(type, props, children) {
    Companion_getInstance_28();
    children = children === VOID ? emptyList() : children;
    this.v1g_1 = type;
    this.w1g_1 = props;
    this.x1g_1 = children;
  }
  protoOf(ComponentView).toString = function () {
    return 'ComponentView(type=' + this.v1g_1 + ', props=' + this.w1g_1 + ', children=' + this.x1g_1 + ')';
  };
  protoOf(ComponentView).hashCode = function () {
    var result = this.v1g_1.hashCode();
    result = imul(result, 31) + this.w1g_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.x1g_1) | 0;
    return result;
  };
  protoOf(ComponentView).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComponentView))
      return false;
    var tmp0_other_with_cast = other instanceof ComponentView ? other : THROW_CCE();
    if (!this.v1g_1.equals(tmp0_other_with_cast.v1g_1))
      return false;
    if (!this.w1g_1.equals(tmp0_other_with_cast.w1g_1))
      return false;
    if (!equals(this.x1g_1, tmp0_other_with_cast.x1g_1))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.r1g_1.l3();
  }
  function ComponentType$Companion$_anonymous__95jk5k() {
    return createSimpleEnumSerializer('com.moreinformatics.ipsviewer.rendering.ComponentType', values_2());
  }
  var ComponentType_CONTAINER_instance;
  var ComponentType_ROW_instance;
  var ComponentType_COLUMN_instance;
  var ComponentType_CARD_instance;
  var ComponentType_ACCORDION_instance;
  var ComponentType_ACCORDION_ITEM_instance;
  var ComponentType_TEXT_instance;
  var ComponentType_HEADING_instance;
  var ComponentType_BADGE_instance;
  var ComponentType_BUTTON_instance;
  var ComponentType_ICON_instance;
  var ComponentType_TABLE_instance;
  var ComponentType_LIST_instance;
  var ComponentType_COLLAPSIBLE_SECTION_instance;
  var ComponentType_TOGGLE_BUTTON_instance;
  var ComponentType_VIEW_JSON_BUTTON_instance;
  var ComponentType_PATIENT_SUMMARY_instance;
  var ComponentType_ALLERGY_ITEM_instance;
  var ComponentType_CONDITION_ITEM_instance;
  var ComponentType_MEDICATION_ITEM_instance;
  var ComponentType_OBSERVATION_ITEM_instance;
  var ComponentType_PROCEDURE_ITEM_instance;
  var ComponentType_IMMUNIZATION_ITEM_instance;
  function Companion_27() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.r1g_1 = lazy(tmp_0, ComponentType$Companion$_anonymous__95jk5k);
  }
  protoOf(Companion_27).i10 = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_27).rp = function (typeParamsSerializers) {
    return this.i10();
  };
  var Companion_instance_27;
  function Companion_getInstance_29() {
    ComponentType_initEntries();
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function values_2() {
    return [ComponentType_CONTAINER_getInstance(), ComponentType_ROW_getInstance(), ComponentType_COLUMN_getInstance(), ComponentType_CARD_getInstance(), ComponentType_ACCORDION_getInstance(), ComponentType_ACCORDION_ITEM_getInstance(), ComponentType_TEXT_getInstance(), ComponentType_HEADING_getInstance(), ComponentType_BADGE_getInstance(), ComponentType_BUTTON_getInstance(), ComponentType_ICON_getInstance(), ComponentType_TABLE_getInstance(), ComponentType_LIST_getInstance(), ComponentType_COLLAPSIBLE_SECTION_getInstance(), ComponentType_TOGGLE_BUTTON_getInstance(), ComponentType_VIEW_JSON_BUTTON_getInstance(), ComponentType_PATIENT_SUMMARY_getInstance(), ComponentType_ALLERGY_ITEM_getInstance(), ComponentType_CONDITION_ITEM_getInstance(), ComponentType_MEDICATION_ITEM_getInstance(), ComponentType_OBSERVATION_ITEM_getInstance(), ComponentType_PROCEDURE_ITEM_getInstance(), ComponentType_IMMUNIZATION_ITEM_getInstance()];
  }
  var ComponentType_entriesInitialized;
  function ComponentType_initEntries() {
    if (ComponentType_entriesInitialized)
      return Unit_instance;
    ComponentType_entriesInitialized = true;
    ComponentType_CONTAINER_instance = new ComponentType('CONTAINER', 0);
    ComponentType_ROW_instance = new ComponentType('ROW', 1);
    ComponentType_COLUMN_instance = new ComponentType('COLUMN', 2);
    ComponentType_CARD_instance = new ComponentType('CARD', 3);
    ComponentType_ACCORDION_instance = new ComponentType('ACCORDION', 4);
    ComponentType_ACCORDION_ITEM_instance = new ComponentType('ACCORDION_ITEM', 5);
    ComponentType_TEXT_instance = new ComponentType('TEXT', 6);
    ComponentType_HEADING_instance = new ComponentType('HEADING', 7);
    ComponentType_BADGE_instance = new ComponentType('BADGE', 8);
    ComponentType_BUTTON_instance = new ComponentType('BUTTON', 9);
    ComponentType_ICON_instance = new ComponentType('ICON', 10);
    ComponentType_TABLE_instance = new ComponentType('TABLE', 11);
    ComponentType_LIST_instance = new ComponentType('LIST', 12);
    ComponentType_COLLAPSIBLE_SECTION_instance = new ComponentType('COLLAPSIBLE_SECTION', 13);
    ComponentType_TOGGLE_BUTTON_instance = new ComponentType('TOGGLE_BUTTON', 14);
    ComponentType_VIEW_JSON_BUTTON_instance = new ComponentType('VIEW_JSON_BUTTON', 15);
    ComponentType_PATIENT_SUMMARY_instance = new ComponentType('PATIENT_SUMMARY', 16);
    ComponentType_ALLERGY_ITEM_instance = new ComponentType('ALLERGY_ITEM', 17);
    ComponentType_CONDITION_ITEM_instance = new ComponentType('CONDITION_ITEM', 18);
    ComponentType_MEDICATION_ITEM_instance = new ComponentType('MEDICATION_ITEM', 19);
    ComponentType_OBSERVATION_ITEM_instance = new ComponentType('OBSERVATION_ITEM', 20);
    ComponentType_PROCEDURE_ITEM_instance = new ComponentType('PROCEDURE_ITEM', 21);
    ComponentType_IMMUNIZATION_ITEM_instance = new ComponentType('IMMUNIZATION_ITEM', 22);
    Companion_getInstance_29();
  }
  function ComponentType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_28() {
    Companion_instance_28 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y1g_1 = [null, null, null, null, null, new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), null, null, null, null, null, null, new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), null, new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(new ArrayListSerializer(StringSerializer_getInstance())), new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance())];
  }
  var Companion_instance_28;
  function Companion_getInstance_30() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.rendering.ComponentProps', this, 17);
    tmp0_serialDesc.ro('text', true);
    tmp0_serialDesc.ro('color', true);
    tmp0_serialDesc.ro('size', true);
    tmp0_serialDesc.ro('variant', true);
    tmp0_serialDesc.ro('className', true);
    tmp0_serialDesc.ro('style', true);
    tmp0_serialDesc.ro('onClick', true);
    tmp0_serialDesc.ro('isCollapsed', true);
    tmp0_serialDesc.ro('isActive', true);
    tmp0_serialDesc.ro('title', true);
    tmp0_serialDesc.ro('subtitle', true);
    tmp0_serialDesc.ro('icon', true);
    tmp0_serialDesc.ro('data', true);
    tmp0_serialDesc.ro('rawJson', true);
    tmp0_serialDesc.ro('headers', true);
    tmp0_serialDesc.ro('rows', true);
    tmp0_serialDesc.ro('custom', true);
    this.z1g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).de = function () {
    return this.z1g_1;
  };
  protoOf($serializer_24).gp = function () {
    var tmp0_cached = Companion_getInstance_30().y1g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[5], get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[12], get_nullable(StringSerializer_getInstance()), tmp0_cached[14], tmp0_cached[15], tmp0_cached[16]];
  };
  protoOf($serializer_24).fe = function (decoder) {
    var tmp0_desc = this.z1g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = false;
    var tmp12_local8 = false;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_input = decoder.eh(tmp0_desc);
    var tmp22_cached = Companion_getInstance_30().y1g_1;
    if (tmp21_input.uh()) {
      tmp4_local0 = tmp21_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp21_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp21_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp21_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp21_input.sh(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp21_input.qh(tmp0_desc, 5, tmp22_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp21_input.sh(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp21_input.gh(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp21_input.gh(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp21_input.sh(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp21_input.sh(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp21_input.sh(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp21_input.qh(tmp0_desc, 12, tmp22_cached[12], tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp21_input.sh(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp21_input.qh(tmp0_desc, 14, tmp22_cached[14], tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp21_input.qh(tmp0_desc, 15, tmp22_cached[15], tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp21_input.qh(tmp0_desc, 16, tmp22_cached[16], tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp21_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp21_input.sh(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp21_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp21_input.sh(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp21_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp21_input.sh(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp21_input.qh(tmp0_desc, 5, tmp22_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp21_input.sh(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp21_input.gh(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp21_input.gh(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp21_input.sh(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp21_input.sh(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp21_input.sh(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp21_input.qh(tmp0_desc, 12, tmp22_cached[12], tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp21_input.sh(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp21_input.qh(tmp0_desc, 14, tmp22_cached[14], tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp21_input.qh(tmp0_desc, 15, tmp22_cached[15], tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp21_input.qh(tmp0_desc, 16, tmp22_cached[16], tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp21_input.fh(tmp0_desc);
    return ComponentProps_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, null);
  };
  protoOf($serializer_24).a1h = function (encoder, value) {
    var tmp0_desc = this.z1g_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().y1g_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !(value.b1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 0, StringSerializer_getInstance(), value.b1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.c1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.c1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !(value.d1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 2, StringSerializer_getInstance(), value.d1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.e1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, StringSerializer_getInstance(), value.e1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !(value.f1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 4, StringSerializer_getInstance(), value.f1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 5) ? true : !equals(value.g1h_1, emptyMap())) {
      tmp1_output.vi(tmp0_desc, 5, tmp2_cached[5], value.g1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 6) ? true : !(value.h1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 6, StringSerializer_getInstance(), value.h1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 7) ? true : !(value.i1h_1 === false)) {
      tmp1_output.li(tmp0_desc, 7, value.i1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 8) ? true : !(value.j1h_1 === false)) {
      tmp1_output.li(tmp0_desc, 8, value.j1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 9) ? true : !(value.k1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 9, StringSerializer_getInstance(), value.k1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 10) ? true : !(value.l1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 10, StringSerializer_getInstance(), value.l1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 11) ? true : !(value.m1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 11, StringSerializer_getInstance(), value.m1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 12) ? true : !equals(value.n1h_1, emptyMap())) {
      tmp1_output.vi(tmp0_desc, 12, tmp2_cached[12], value.n1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 13) ? true : !(value.o1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 13, StringSerializer_getInstance(), value.o1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 14) ? true : !equals(value.p1h_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 14, tmp2_cached[14], value.p1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 15) ? true : !equals(value.q1h_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 15, tmp2_cached[15], value.q1h_1);
    }
    if (tmp1_output.bj(tmp0_desc, 16) ? true : !equals(value.r1h_1, emptyMap())) {
      tmp1_output.vi(tmp0_desc, 16, tmp2_cached[16], value.r1h_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_24).ee = function (encoder, value) {
    return this.a1h(encoder, value instanceof ComponentProps ? value : THROW_CCE());
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function ComponentProps_init_$Init$(seen1, text, color, size, variant, className, style, onClick, isCollapsed, isActive, title, subtitle, icon, data, rawJson, headers, rows, custom, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_24().z1g_1);
    }
    if (0 === (seen1 & 1))
      $this.b1h_1 = null;
    else
      $this.b1h_1 = text;
    if (0 === (seen1 & 2))
      $this.c1h_1 = null;
    else
      $this.c1h_1 = color;
    if (0 === (seen1 & 4))
      $this.d1h_1 = null;
    else
      $this.d1h_1 = size;
    if (0 === (seen1 & 8))
      $this.e1h_1 = null;
    else
      $this.e1h_1 = variant;
    if (0 === (seen1 & 16))
      $this.f1h_1 = null;
    else
      $this.f1h_1 = className;
    if (0 === (seen1 & 32))
      $this.g1h_1 = emptyMap();
    else
      $this.g1h_1 = style;
    if (0 === (seen1 & 64))
      $this.h1h_1 = null;
    else
      $this.h1h_1 = onClick;
    if (0 === (seen1 & 128))
      $this.i1h_1 = false;
    else
      $this.i1h_1 = isCollapsed;
    if (0 === (seen1 & 256))
      $this.j1h_1 = false;
    else
      $this.j1h_1 = isActive;
    if (0 === (seen1 & 512))
      $this.k1h_1 = null;
    else
      $this.k1h_1 = title;
    if (0 === (seen1 & 1024))
      $this.l1h_1 = null;
    else
      $this.l1h_1 = subtitle;
    if (0 === (seen1 & 2048))
      $this.m1h_1 = null;
    else
      $this.m1h_1 = icon;
    if (0 === (seen1 & 4096))
      $this.n1h_1 = emptyMap();
    else
      $this.n1h_1 = data;
    if (0 === (seen1 & 8192))
      $this.o1h_1 = null;
    else
      $this.o1h_1 = rawJson;
    if (0 === (seen1 & 16384))
      $this.p1h_1 = emptyList();
    else
      $this.p1h_1 = headers;
    if (0 === (seen1 & 32768))
      $this.q1h_1 = emptyList();
    else
      $this.q1h_1 = rows;
    if (0 === (seen1 & 65536))
      $this.r1h_1 = emptyMap();
    else
      $this.r1h_1 = custom;
    return $this;
  }
  function ComponentProps_init_$Create$(seen1, text, color, size, variant, className, style, onClick, isCollapsed, isActive, title, subtitle, icon, data, rawJson, headers, rows, custom, serializationConstructorMarker) {
    return ComponentProps_init_$Init$(seen1, text, color, size, variant, className, style, onClick, isCollapsed, isActive, title, subtitle, icon, data, rawJson, headers, rows, custom, serializationConstructorMarker, objectCreate(protoOf(ComponentProps)));
  }
  function ComponentProps(text, color, size, variant, className, style, onClick, isCollapsed, isActive, title, subtitle, icon, data, rawJson, headers, rows, custom) {
    Companion_getInstance_30();
    text = text === VOID ? null : text;
    color = color === VOID ? null : color;
    size = size === VOID ? null : size;
    variant = variant === VOID ? null : variant;
    className = className === VOID ? null : className;
    style = style === VOID ? emptyMap() : style;
    onClick = onClick === VOID ? null : onClick;
    isCollapsed = isCollapsed === VOID ? false : isCollapsed;
    isActive = isActive === VOID ? false : isActive;
    title = title === VOID ? null : title;
    subtitle = subtitle === VOID ? null : subtitle;
    icon = icon === VOID ? null : icon;
    data = data === VOID ? emptyMap() : data;
    rawJson = rawJson === VOID ? null : rawJson;
    headers = headers === VOID ? emptyList() : headers;
    rows = rows === VOID ? emptyList() : rows;
    custom = custom === VOID ? emptyMap() : custom;
    this.b1h_1 = text;
    this.c1h_1 = color;
    this.d1h_1 = size;
    this.e1h_1 = variant;
    this.f1h_1 = className;
    this.g1h_1 = style;
    this.h1h_1 = onClick;
    this.i1h_1 = isCollapsed;
    this.j1h_1 = isActive;
    this.k1h_1 = title;
    this.l1h_1 = subtitle;
    this.m1h_1 = icon;
    this.n1h_1 = data;
    this.o1h_1 = rawJson;
    this.p1h_1 = headers;
    this.q1h_1 = rows;
    this.r1h_1 = custom;
  }
  protoOf(ComponentProps).toString = function () {
    return 'ComponentProps(text=' + this.b1h_1 + ', color=' + this.c1h_1 + ', size=' + this.d1h_1 + ', variant=' + this.e1h_1 + ', className=' + this.f1h_1 + ', style=' + this.g1h_1 + ', onClick=' + this.h1h_1 + ', isCollapsed=' + this.i1h_1 + ', isActive=' + this.j1h_1 + ', title=' + this.k1h_1 + ', subtitle=' + this.l1h_1 + ', icon=' + this.m1h_1 + ', data=' + this.n1h_1 + ', rawJson=' + this.o1h_1 + ', headers=' + this.p1h_1 + ', rows=' + this.q1h_1 + ', custom=' + this.r1h_1 + ')';
  };
  protoOf(ComponentProps).hashCode = function () {
    var result = this.b1h_1 == null ? 0 : getStringHashCode(this.b1h_1);
    result = imul(result, 31) + (this.c1h_1 == null ? 0 : getStringHashCode(this.c1h_1)) | 0;
    result = imul(result, 31) + (this.d1h_1 == null ? 0 : getStringHashCode(this.d1h_1)) | 0;
    result = imul(result, 31) + (this.e1h_1 == null ? 0 : getStringHashCode(this.e1h_1)) | 0;
    result = imul(result, 31) + (this.f1h_1 == null ? 0 : getStringHashCode(this.f1h_1)) | 0;
    result = imul(result, 31) + hashCode(this.g1h_1) | 0;
    result = imul(result, 31) + (this.h1h_1 == null ? 0 : getStringHashCode(this.h1h_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.i1h_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.j1h_1) | 0;
    result = imul(result, 31) + (this.k1h_1 == null ? 0 : getStringHashCode(this.k1h_1)) | 0;
    result = imul(result, 31) + (this.l1h_1 == null ? 0 : getStringHashCode(this.l1h_1)) | 0;
    result = imul(result, 31) + (this.m1h_1 == null ? 0 : getStringHashCode(this.m1h_1)) | 0;
    result = imul(result, 31) + hashCode(this.n1h_1) | 0;
    result = imul(result, 31) + (this.o1h_1 == null ? 0 : getStringHashCode(this.o1h_1)) | 0;
    result = imul(result, 31) + hashCode(this.p1h_1) | 0;
    result = imul(result, 31) + hashCode(this.q1h_1) | 0;
    result = imul(result, 31) + hashCode(this.r1h_1) | 0;
    return result;
  };
  protoOf(ComponentProps).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComponentProps))
      return false;
    var tmp0_other_with_cast = other instanceof ComponentProps ? other : THROW_CCE();
    if (!(this.b1h_1 == tmp0_other_with_cast.b1h_1))
      return false;
    if (!(this.c1h_1 == tmp0_other_with_cast.c1h_1))
      return false;
    if (!(this.d1h_1 == tmp0_other_with_cast.d1h_1))
      return false;
    if (!(this.e1h_1 == tmp0_other_with_cast.e1h_1))
      return false;
    if (!(this.f1h_1 == tmp0_other_with_cast.f1h_1))
      return false;
    if (!equals(this.g1h_1, tmp0_other_with_cast.g1h_1))
      return false;
    if (!(this.h1h_1 == tmp0_other_with_cast.h1h_1))
      return false;
    if (!(this.i1h_1 === tmp0_other_with_cast.i1h_1))
      return false;
    if (!(this.j1h_1 === tmp0_other_with_cast.j1h_1))
      return false;
    if (!(this.k1h_1 == tmp0_other_with_cast.k1h_1))
      return false;
    if (!(this.l1h_1 == tmp0_other_with_cast.l1h_1))
      return false;
    if (!(this.m1h_1 == tmp0_other_with_cast.m1h_1))
      return false;
    if (!equals(this.n1h_1, tmp0_other_with_cast.n1h_1))
      return false;
    if (!(this.o1h_1 == tmp0_other_with_cast.o1h_1))
      return false;
    if (!equals(this.p1h_1, tmp0_other_with_cast.p1h_1))
      return false;
    if (!equals(this.q1h_1, tmp0_other_with_cast.q1h_1))
      return false;
    if (!equals(this.r1h_1, tmp0_other_with_cast.r1h_1))
      return false;
    return true;
  };
  function Companion_29() {
  }
  var Companion_instance_29;
  function Companion_getInstance_31() {
    return Companion_instance_29;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.rendering.EnhancedResourceDisplay', this, 4);
    tmp0_serialDesc.ro('resourceType', false);
    tmp0_serialDesc.ro('id', true);
    tmp0_serialDesc.ro('component', false);
    tmp0_serialDesc.ro('rawJson', true);
    this.s1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).de = function () {
    return this.s1h_1;
  };
  protoOf($serializer_25).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), $serializer_getInstance_23(), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_25).fe = function (decoder) {
    var tmp0_desc = this.s1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.eh(tmp0_desc);
    if (tmp8_input.uh()) {
      tmp4_local0 = tmp8_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.qh(tmp0_desc, 2, $serializer_getInstance_23(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.sh(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.qh(tmp0_desc, 2, $serializer_getInstance_23(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.fh(tmp0_desc);
    return EnhancedResourceDisplay_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_25).t1h = function (encoder, value) {
    var tmp0_desc = this.s1h_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    tmp1_output.ti(tmp0_desc, 0, value.u1h_1);
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !(value.v1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 1, StringSerializer_getInstance(), value.v1h_1);
    }
    tmp1_output.vi(tmp0_desc, 2, $serializer_getInstance_23(), value.w1h_1);
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.x1h_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, StringSerializer_getInstance(), value.x1h_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_25).ee = function (encoder, value) {
    return this.t1h(encoder, value instanceof EnhancedResourceDisplay ? value : THROW_CCE());
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function EnhancedResourceDisplay_init_$Init$(seen1, resourceType, id, component, rawJson, serializationConstructorMarker, $this) {
    if (!(5 === (5 & seen1))) {
      throwMissingFieldException(seen1, 5, $serializer_getInstance_25().s1h_1);
    }
    $this.u1h_1 = resourceType;
    if (0 === (seen1 & 2))
      $this.v1h_1 = null;
    else
      $this.v1h_1 = id;
    $this.w1h_1 = component;
    if (0 === (seen1 & 8))
      $this.x1h_1 = null;
    else
      $this.x1h_1 = rawJson;
    return $this;
  }
  function EnhancedResourceDisplay_init_$Create$(seen1, resourceType, id, component, rawJson, serializationConstructorMarker) {
    return EnhancedResourceDisplay_init_$Init$(seen1, resourceType, id, component, rawJson, serializationConstructorMarker, objectCreate(protoOf(EnhancedResourceDisplay)));
  }
  function EnhancedResourceDisplay(resourceType, id, component, rawJson) {
    id = id === VOID ? null : id;
    rawJson = rawJson === VOID ? null : rawJson;
    this.u1h_1 = resourceType;
    this.v1h_1 = id;
    this.w1h_1 = component;
    this.x1h_1 = rawJson;
  }
  protoOf(EnhancedResourceDisplay).toString = function () {
    return 'EnhancedResourceDisplay(resourceType=' + this.u1h_1 + ', id=' + this.v1h_1 + ', component=' + this.w1h_1 + ', rawJson=' + this.x1h_1 + ')';
  };
  protoOf(EnhancedResourceDisplay).hashCode = function () {
    var result = getStringHashCode(this.u1h_1);
    result = imul(result, 31) + (this.v1h_1 == null ? 0 : getStringHashCode(this.v1h_1)) | 0;
    result = imul(result, 31) + this.w1h_1.hashCode() | 0;
    result = imul(result, 31) + (this.x1h_1 == null ? 0 : getStringHashCode(this.x1h_1)) | 0;
    return result;
  };
  protoOf(EnhancedResourceDisplay).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnhancedResourceDisplay))
      return false;
    var tmp0_other_with_cast = other instanceof EnhancedResourceDisplay ? other : THROW_CCE();
    if (!(this.u1h_1 === tmp0_other_with_cast.u1h_1))
      return false;
    if (!(this.v1h_1 == tmp0_other_with_cast.v1h_1))
      return false;
    if (!this.w1h_1.equals(tmp0_other_with_cast.w1h_1))
      return false;
    if (!(this.x1h_1 == tmp0_other_with_cast.x1h_1))
      return false;
    return true;
  };
  function Companion_30() {
    Companion_instance_30 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y1h_1 = [null, null, null, null, new ArrayListSerializer($serializer_getInstance_23()), new ArrayListSerializer($serializer_getInstance_25())];
  }
  var Companion_instance_30;
  function Companion_getInstance_32() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.rendering.EnhancedSectionContent', this, 6);
    tmp0_serialDesc.ro('title', false);
    tmp0_serialDesc.ro('hasData', false);
    tmp0_serialDesc.ro('useTextMode', false);
    tmp0_serialDesc.ro('textContent', true);
    tmp0_serialDesc.ro('components', true);
    tmp0_serialDesc.ro('resources', true);
    this.z1h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).de = function () {
    return this.z1h_1;
  };
  protoOf($serializer_26).gp = function () {
    var tmp0_cached = Companion_getInstance_32().y1h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[4], tmp0_cached[5]];
  };
  protoOf($serializer_26).fe = function (decoder) {
    var tmp0_desc = this.z1h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.eh(tmp0_desc);
    var tmp11_cached = Companion_getInstance_32().y1h_1;
    if (tmp10_input.uh()) {
      tmp4_local0 = tmp10_input.oh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.gh(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.gh(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.qh(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.qh(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.oh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.gh(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.gh(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.sh(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.qh(tmp0_desc, 4, tmp11_cached[4], tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.qh(tmp0_desc, 5, tmp11_cached[5], tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.fh(tmp0_desc);
    return EnhancedSectionContent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_26).a1i = function (encoder, value) {
    var tmp0_desc = this.z1h_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_32().y1h_1;
    tmp1_output.ti(tmp0_desc, 0, value.b1i_1);
    tmp1_output.li(tmp0_desc, 1, value.c1i_1);
    tmp1_output.li(tmp0_desc, 2, value.d1i_1);
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.e1i_1 == null)) {
      tmp1_output.xi(tmp0_desc, 3, StringSerializer_getInstance(), value.e1i_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !equals(value.f1i_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 4, tmp2_cached[4], value.f1i_1);
    }
    if (tmp1_output.bj(tmp0_desc, 5) ? true : !equals(value.g1i_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 5, tmp2_cached[5], value.g1i_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_26).ee = function (encoder, value) {
    return this.a1i(encoder, value instanceof EnhancedSectionContent ? value : THROW_CCE());
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function EnhancedSectionContent_init_$Init$(seen1, title, hasData, useTextMode, textContent, components, resources, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_26().z1h_1);
    }
    $this.b1i_1 = title;
    $this.c1i_1 = hasData;
    $this.d1i_1 = useTextMode;
    if (0 === (seen1 & 8))
      $this.e1i_1 = null;
    else
      $this.e1i_1 = textContent;
    if (0 === (seen1 & 16))
      $this.f1i_1 = emptyList();
    else
      $this.f1i_1 = components;
    if (0 === (seen1 & 32))
      $this.g1i_1 = emptyList();
    else
      $this.g1i_1 = resources;
    return $this;
  }
  function EnhancedSectionContent_init_$Create$(seen1, title, hasData, useTextMode, textContent, components, resources, serializationConstructorMarker) {
    return EnhancedSectionContent_init_$Init$(seen1, title, hasData, useTextMode, textContent, components, resources, serializationConstructorMarker, objectCreate(protoOf(EnhancedSectionContent)));
  }
  function EnhancedSectionContent(title, hasData, useTextMode, textContent, components, resources) {
    Companion_getInstance_32();
    textContent = textContent === VOID ? null : textContent;
    components = components === VOID ? emptyList() : components;
    resources = resources === VOID ? emptyList() : resources;
    this.b1i_1 = title;
    this.c1i_1 = hasData;
    this.d1i_1 = useTextMode;
    this.e1i_1 = textContent;
    this.f1i_1 = components;
    this.g1i_1 = resources;
  }
  protoOf(EnhancedSectionContent).toString = function () {
    return 'EnhancedSectionContent(title=' + this.b1i_1 + ', hasData=' + this.c1i_1 + ', useTextMode=' + this.d1i_1 + ', textContent=' + this.e1i_1 + ', components=' + this.f1i_1 + ', resources=' + this.g1i_1 + ')';
  };
  protoOf(EnhancedSectionContent).hashCode = function () {
    var result = getStringHashCode(this.b1i_1);
    result = imul(result, 31) + getBooleanHashCode(this.c1i_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.d1i_1) | 0;
    result = imul(result, 31) + (this.e1i_1 == null ? 0 : getStringHashCode(this.e1i_1)) | 0;
    result = imul(result, 31) + hashCode(this.f1i_1) | 0;
    result = imul(result, 31) + hashCode(this.g1i_1) | 0;
    return result;
  };
  protoOf(EnhancedSectionContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnhancedSectionContent))
      return false;
    var tmp0_other_with_cast = other instanceof EnhancedSectionContent ? other : THROW_CCE();
    if (!(this.b1i_1 === tmp0_other_with_cast.b1i_1))
      return false;
    if (!(this.c1i_1 === tmp0_other_with_cast.c1i_1))
      return false;
    if (!(this.d1i_1 === tmp0_other_with_cast.d1i_1))
      return false;
    if (!(this.e1i_1 == tmp0_other_with_cast.e1i_1))
      return false;
    if (!equals(this.f1i_1, tmp0_other_with_cast.f1i_1))
      return false;
    if (!equals(this.g1i_1, tmp0_other_with_cast.g1i_1))
      return false;
    return true;
  };
  function Companion_31() {
    Companion_instance_31 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h1i_1 = [new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_26()), new ArrayListSerializer($serializer_getInstance_23()), new ArrayListSerializer(StringSerializer_getInstance()), new ArrayListSerializer(StringSerializer_getInstance())];
  }
  protoOf(Companion_31).i10 = function () {
    return $serializer_getInstance_27();
  };
  var Companion_instance_31;
  function Companion_getInstance_33() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.rendering.IpsRenderingResult', this, 4);
    tmp0_serialDesc.ro('sections', false);
    tmp0_serialDesc.ro('globalComponents', true);
    tmp0_serialDesc.ro('errors', true);
    tmp0_serialDesc.ro('warnings', true);
    this.i1i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).de = function () {
    return this.i1i_1;
  };
  protoOf($serializer_27).gp = function () {
    var tmp0_cached = Companion_getInstance_33().h1i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1], tmp0_cached[2], tmp0_cached[3]];
  };
  protoOf($serializer_27).fe = function (decoder) {
    var tmp0_desc = this.i1i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.eh(tmp0_desc);
    var tmp9_cached = Companion_getInstance_33().h1i_1;
    if (tmp8_input.uh()) {
      tmp4_local0 = tmp8_input.qh(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.qh(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.qh(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.qh(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.qh(tmp0_desc, 0, tmp9_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.qh(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.qh(tmp0_desc, 2, tmp9_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.qh(tmp0_desc, 3, tmp9_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.fh(tmp0_desc);
    return IpsRenderingResult_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_27).j1i = function (encoder, value) {
    var tmp0_desc = this.i1i_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_33().h1i_1;
    tmp1_output.vi(tmp0_desc, 0, tmp2_cached[0], value.k1i_1);
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !equals(value.l1i_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 1, tmp2_cached[1], value.l1i_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !equals(value.m1i_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 2, tmp2_cached[2], value.m1i_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !equals(value.n1i_1, emptyList())) {
      tmp1_output.vi(tmp0_desc, 3, tmp2_cached[3], value.n1i_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_27).ee = function (encoder, value) {
    return this.j1i(encoder, value instanceof IpsRenderingResult ? value : THROW_CCE());
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function IpsRenderingResult_init_$Init$(seen1, sections, globalComponents, errors, warnings, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_27().i1i_1);
    }
    $this.k1i_1 = sections;
    if (0 === (seen1 & 2))
      $this.l1i_1 = emptyList();
    else
      $this.l1i_1 = globalComponents;
    if (0 === (seen1 & 4))
      $this.m1i_1 = emptyList();
    else
      $this.m1i_1 = errors;
    if (0 === (seen1 & 8))
      $this.n1i_1 = emptyList();
    else
      $this.n1i_1 = warnings;
    return $this;
  }
  function IpsRenderingResult_init_$Create$(seen1, sections, globalComponents, errors, warnings, serializationConstructorMarker) {
    return IpsRenderingResult_init_$Init$(seen1, sections, globalComponents, errors, warnings, serializationConstructorMarker, objectCreate(protoOf(IpsRenderingResult)));
  }
  function IpsRenderingResult(sections, globalComponents, errors, warnings) {
    Companion_getInstance_33();
    globalComponents = globalComponents === VOID ? emptyList() : globalComponents;
    errors = errors === VOID ? emptyList() : errors;
    warnings = warnings === VOID ? emptyList() : warnings;
    this.k1i_1 = sections;
    this.l1i_1 = globalComponents;
    this.m1i_1 = errors;
    this.n1i_1 = warnings;
  }
  protoOf(IpsRenderingResult).toString = function () {
    return 'IpsRenderingResult(sections=' + this.k1i_1 + ', globalComponents=' + this.l1i_1 + ', errors=' + this.m1i_1 + ', warnings=' + this.n1i_1 + ')';
  };
  protoOf(IpsRenderingResult).hashCode = function () {
    var result = hashCode(this.k1i_1);
    result = imul(result, 31) + hashCode(this.l1i_1) | 0;
    result = imul(result, 31) + hashCode(this.m1i_1) | 0;
    result = imul(result, 31) + hashCode(this.n1i_1) | 0;
    return result;
  };
  protoOf(IpsRenderingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IpsRenderingResult))
      return false;
    var tmp0_other_with_cast = other instanceof IpsRenderingResult ? other : THROW_CCE();
    if (!equals(this.k1i_1, tmp0_other_with_cast.k1i_1))
      return false;
    if (!equals(this.l1i_1, tmp0_other_with_cast.l1i_1))
      return false;
    if (!equals(this.m1i_1, tmp0_other_with_cast.m1i_1))
      return false;
    if (!equals(this.n1i_1, tmp0_other_with_cast.n1i_1))
      return false;
    return true;
  };
  function Companion_32() {
    Companion_instance_32 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r1i_1 = [Companion_getInstance_35().i10(), Companion_getInstance_36().i10(), Companion_getInstance_37().i10(), null, null, null, null];
  }
  var Companion_instance_32;
  function Companion_getInstance_34() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.moreinformatics.ipsviewer.rendering.RenderingConfig', this, 7);
    tmp0_serialDesc.ro('mode', true);
    tmp0_serialDesc.ro('platform', true);
    tmp0_serialDesc.ro('theme', true);
    tmp0_serialDesc.ro('includeRawJson', true);
    tmp0_serialDesc.ro('enableInteractivity', true);
    tmp0_serialDesc.ro('maxTableRows', true);
    tmp0_serialDesc.ro('dateFormat', true);
    this.s1i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).de = function () {
    return this.s1i_1;
  };
  protoOf($serializer_28).gp = function () {
    var tmp0_cached = Companion_getInstance_34().r1i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0], tmp0_cached[1], tmp0_cached[2], BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_28).fe = function (decoder) {
    var tmp0_desc = this.s1i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = false;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_input = decoder.eh(tmp0_desc);
    var tmp12_cached = Companion_getInstance_34().r1i_1;
    if (tmp11_input.uh()) {
      tmp4_local0 = tmp11_input.qh(tmp0_desc, 0, tmp12_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.qh(tmp0_desc, 1, tmp12_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.qh(tmp0_desc, 2, tmp12_cached[2], tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.gh(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.gh(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.jh(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.oh(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.vh(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.qh(tmp0_desc, 0, tmp12_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.qh(tmp0_desc, 1, tmp12_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.qh(tmp0_desc, 2, tmp12_cached[2], tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.gh(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.gh(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.jh(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.oh(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.fh(tmp0_desc);
    return RenderingConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_28).t1i = function (encoder, value) {
    var tmp0_desc = this.s1i_1;
    var tmp1_output = encoder.eh(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().r1i_1;
    if (tmp1_output.bj(tmp0_desc, 0) ? true : !value.h1g_1.equals(RenderingMode_STRUCTURED_getInstance())) {
      tmp1_output.vi(tmp0_desc, 0, tmp2_cached[0], value.h1g_1);
    }
    if (tmp1_output.bj(tmp0_desc, 1) ? true : !value.i1g_1.equals(TargetPlatform_WEB_getInstance())) {
      tmp1_output.vi(tmp0_desc, 1, tmp2_cached[1], value.i1g_1);
    }
    if (tmp1_output.bj(tmp0_desc, 2) ? true : !value.j1g_1.equals(RenderingTheme_DEFAULT_getInstance())) {
      tmp1_output.vi(tmp0_desc, 2, tmp2_cached[2], value.j1g_1);
    }
    if (tmp1_output.bj(tmp0_desc, 3) ? true : !(value.k1g_1 === true)) {
      tmp1_output.li(tmp0_desc, 3, value.k1g_1);
    }
    if (tmp1_output.bj(tmp0_desc, 4) ? true : !(value.l1g_1 === true)) {
      tmp1_output.li(tmp0_desc, 4, value.l1g_1);
    }
    if (tmp1_output.bj(tmp0_desc, 5) ? true : !(value.m1g_1 === 100)) {
      tmp1_output.oi(tmp0_desc, 5, value.m1g_1);
    }
    if (tmp1_output.bj(tmp0_desc, 6) ? true : !(value.n1g_1 === 'dd-MMM-yyyy')) {
      tmp1_output.ti(tmp0_desc, 6, value.n1g_1);
    }
    tmp1_output.fh(tmp0_desc);
  };
  protoOf($serializer_28).ee = function (encoder, value) {
    return this.t1i(encoder, value instanceof RenderingConfig ? value : THROW_CCE());
  };
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function RenderingConfig_init_$Init$(seen1, mode, platform, theme, includeRawJson, enableInteractivity, maxTableRows, dateFormat, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_28().s1i_1);
    }
    if (0 === (seen1 & 1))
      $this.h1g_1 = RenderingMode_STRUCTURED_getInstance();
    else
      $this.h1g_1 = mode;
    if (0 === (seen1 & 2))
      $this.i1g_1 = TargetPlatform_WEB_getInstance();
    else
      $this.i1g_1 = platform;
    if (0 === (seen1 & 4))
      $this.j1g_1 = RenderingTheme_DEFAULT_getInstance();
    else
      $this.j1g_1 = theme;
    if (0 === (seen1 & 8))
      $this.k1g_1 = true;
    else
      $this.k1g_1 = includeRawJson;
    if (0 === (seen1 & 16))
      $this.l1g_1 = true;
    else
      $this.l1g_1 = enableInteractivity;
    if (0 === (seen1 & 32))
      $this.m1g_1 = 100;
    else
      $this.m1g_1 = maxTableRows;
    if (0 === (seen1 & 64))
      $this.n1g_1 = 'dd-MMM-yyyy';
    else
      $this.n1g_1 = dateFormat;
    return $this;
  }
  function RenderingConfig_init_$Create$(seen1, mode, platform, theme, includeRawJson, enableInteractivity, maxTableRows, dateFormat, serializationConstructorMarker) {
    return RenderingConfig_init_$Init$(seen1, mode, platform, theme, includeRawJson, enableInteractivity, maxTableRows, dateFormat, serializationConstructorMarker, objectCreate(protoOf(RenderingConfig)));
  }
  function RenderingConfig(mode, platform, theme, includeRawJson, enableInteractivity, maxTableRows, dateFormat) {
    Companion_getInstance_34();
    mode = mode === VOID ? RenderingMode_STRUCTURED_getInstance() : mode;
    platform = platform === VOID ? TargetPlatform_WEB_getInstance() : platform;
    theme = theme === VOID ? RenderingTheme_DEFAULT_getInstance() : theme;
    includeRawJson = includeRawJson === VOID ? true : includeRawJson;
    enableInteractivity = enableInteractivity === VOID ? true : enableInteractivity;
    maxTableRows = maxTableRows === VOID ? 100 : maxTableRows;
    dateFormat = dateFormat === VOID ? 'dd-MMM-yyyy' : dateFormat;
    this.h1g_1 = mode;
    this.i1g_1 = platform;
    this.j1g_1 = theme;
    this.k1g_1 = includeRawJson;
    this.l1g_1 = enableInteractivity;
    this.m1g_1 = maxTableRows;
    this.n1g_1 = dateFormat;
  }
  protoOf(RenderingConfig).toString = function () {
    return 'RenderingConfig(mode=' + this.h1g_1 + ', platform=' + this.i1g_1 + ', theme=' + this.j1g_1 + ', includeRawJson=' + this.k1g_1 + ', enableInteractivity=' + this.l1g_1 + ', maxTableRows=' + this.m1g_1 + ', dateFormat=' + this.n1g_1 + ')';
  };
  protoOf(RenderingConfig).hashCode = function () {
    var result = this.h1g_1.hashCode();
    result = imul(result, 31) + this.i1g_1.hashCode() | 0;
    result = imul(result, 31) + this.j1g_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.k1g_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l1g_1) | 0;
    result = imul(result, 31) + this.m1g_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.n1g_1) | 0;
    return result;
  };
  protoOf(RenderingConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RenderingConfig))
      return false;
    var tmp0_other_with_cast = other instanceof RenderingConfig ? other : THROW_CCE();
    if (!this.h1g_1.equals(tmp0_other_with_cast.h1g_1))
      return false;
    if (!this.i1g_1.equals(tmp0_other_with_cast.i1g_1))
      return false;
    if (!this.j1g_1.equals(tmp0_other_with_cast.j1g_1))
      return false;
    if (!(this.k1g_1 === tmp0_other_with_cast.k1g_1))
      return false;
    if (!(this.l1g_1 === tmp0_other_with_cast.l1g_1))
      return false;
    if (!(this.m1g_1 === tmp0_other_with_cast.m1g_1))
      return false;
    if (!(this.n1g_1 === tmp0_other_with_cast.n1g_1))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj_3($this) {
    return $this.o1i_1.l3();
  }
  function RenderingMode$Companion$_anonymous__fuoyps() {
    return createSimpleEnumSerializer('com.moreinformatics.ipsviewer.rendering.RenderingMode', values_3());
  }
  var RenderingMode_STRUCTURED_instance;
  var RenderingMode_TEXT_instance;
  var RenderingMode_HYBRID_instance;
  function Companion_33() {
    Companion_instance_33 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.o1i_1 = lazy(tmp_0, RenderingMode$Companion$_anonymous__fuoyps);
  }
  protoOf(Companion_33).i10 = function () {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_33).rp = function (typeParamsSerializers) {
    return this.i10();
  };
  var Companion_instance_33;
  function Companion_getInstance_35() {
    RenderingMode_initEntries();
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function values_3() {
    return [RenderingMode_STRUCTURED_getInstance(), RenderingMode_TEXT_getInstance(), RenderingMode_HYBRID_getInstance()];
  }
  var RenderingMode_entriesInitialized;
  function RenderingMode_initEntries() {
    if (RenderingMode_entriesInitialized)
      return Unit_instance;
    RenderingMode_entriesInitialized = true;
    RenderingMode_STRUCTURED_instance = new RenderingMode('STRUCTURED', 0);
    RenderingMode_TEXT_instance = new RenderingMode('TEXT', 1);
    RenderingMode_HYBRID_instance = new RenderingMode('HYBRID', 2);
    Companion_getInstance_35();
  }
  function RenderingMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_$cachedSerializer__te6jhj_4($this) {
    return $this.p1i_1.l3();
  }
  function TargetPlatform$Companion$_anonymous__jn1egb() {
    return createSimpleEnumSerializer('com.moreinformatics.ipsviewer.rendering.TargetPlatform', values_4());
  }
  var TargetPlatform_WEB_instance;
  var TargetPlatform_ANDROID_instance;
  var TargetPlatform_IOS_instance;
  function Companion_34() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.p1i_1 = lazy(tmp_0, TargetPlatform$Companion$_anonymous__jn1egb);
  }
  protoOf(Companion_34).i10 = function () {
    return _get_$cachedSerializer__te6jhj_4(this);
  };
  protoOf(Companion_34).rp = function (typeParamsSerializers) {
    return this.i10();
  };
  var Companion_instance_34;
  function Companion_getInstance_36() {
    TargetPlatform_initEntries();
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function values_4() {
    return [TargetPlatform_WEB_getInstance(), TargetPlatform_ANDROID_getInstance(), TargetPlatform_IOS_getInstance()];
  }
  var TargetPlatform_entriesInitialized;
  function TargetPlatform_initEntries() {
    if (TargetPlatform_entriesInitialized)
      return Unit_instance;
    TargetPlatform_entriesInitialized = true;
    TargetPlatform_WEB_instance = new TargetPlatform('WEB', 0);
    TargetPlatform_ANDROID_instance = new TargetPlatform('ANDROID', 1);
    TargetPlatform_IOS_instance = new TargetPlatform('IOS', 2);
    Companion_getInstance_36();
  }
  function TargetPlatform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_$cachedSerializer__te6jhj_5($this) {
    return $this.q1i_1.l3();
  }
  function RenderingTheme$Companion$_anonymous__lulphq() {
    return createSimpleEnumSerializer('com.moreinformatics.ipsviewer.rendering.RenderingTheme', values_5());
  }
  var RenderingTheme_DEFAULT_instance;
  var RenderingTheme_COMPACT_instance;
  var RenderingTheme_DETAILED_instance;
  var RenderingTheme_ACCESSIBILITY_FOCUSED_instance;
  function Companion_35() {
    Companion_instance_35 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.q1i_1 = lazy(tmp_0, RenderingTheme$Companion$_anonymous__lulphq);
  }
  protoOf(Companion_35).i10 = function () {
    return _get_$cachedSerializer__te6jhj_5(this);
  };
  protoOf(Companion_35).rp = function (typeParamsSerializers) {
    return this.i10();
  };
  var Companion_instance_35;
  function Companion_getInstance_37() {
    RenderingTheme_initEntries();
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function values_5() {
    return [RenderingTheme_DEFAULT_getInstance(), RenderingTheme_COMPACT_getInstance(), RenderingTheme_DETAILED_getInstance(), RenderingTheme_ACCESSIBILITY_FOCUSED_getInstance()];
  }
  var RenderingTheme_entriesInitialized;
  function RenderingTheme_initEntries() {
    if (RenderingTheme_entriesInitialized)
      return Unit_instance;
    RenderingTheme_entriesInitialized = true;
    RenderingTheme_DEFAULT_instance = new RenderingTheme('DEFAULT', 0);
    RenderingTheme_COMPACT_instance = new RenderingTheme('COMPACT', 1);
    RenderingTheme_DETAILED_instance = new RenderingTheme('DETAILED', 2);
    RenderingTheme_ACCESSIBILITY_FOCUSED_instance = new RenderingTheme('ACCESSIBILITY_FOCUSED', 3);
    Companion_getInstance_37();
  }
  function RenderingTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ComponentType_CONTAINER_getInstance() {
    ComponentType_initEntries();
    return ComponentType_CONTAINER_instance;
  }
  function ComponentType_ROW_getInstance() {
    ComponentType_initEntries();
    return ComponentType_ROW_instance;
  }
  function ComponentType_COLUMN_getInstance() {
    ComponentType_initEntries();
    return ComponentType_COLUMN_instance;
  }
  function ComponentType_CARD_getInstance() {
    ComponentType_initEntries();
    return ComponentType_CARD_instance;
  }
  function ComponentType_ACCORDION_getInstance() {
    ComponentType_initEntries();
    return ComponentType_ACCORDION_instance;
  }
  function ComponentType_ACCORDION_ITEM_getInstance() {
    ComponentType_initEntries();
    return ComponentType_ACCORDION_ITEM_instance;
  }
  function ComponentType_TEXT_getInstance() {
    ComponentType_initEntries();
    return ComponentType_TEXT_instance;
  }
  function ComponentType_HEADING_getInstance() {
    ComponentType_initEntries();
    return ComponentType_HEADING_instance;
  }
  function ComponentType_BADGE_getInstance() {
    ComponentType_initEntries();
    return ComponentType_BADGE_instance;
  }
  function ComponentType_BUTTON_getInstance() {
    ComponentType_initEntries();
    return ComponentType_BUTTON_instance;
  }
  function ComponentType_ICON_getInstance() {
    ComponentType_initEntries();
    return ComponentType_ICON_instance;
  }
  function ComponentType_TABLE_getInstance() {
    ComponentType_initEntries();
    return ComponentType_TABLE_instance;
  }
  function ComponentType_LIST_getInstance() {
    ComponentType_initEntries();
    return ComponentType_LIST_instance;
  }
  function ComponentType_COLLAPSIBLE_SECTION_getInstance() {
    ComponentType_initEntries();
    return ComponentType_COLLAPSIBLE_SECTION_instance;
  }
  function ComponentType_TOGGLE_BUTTON_getInstance() {
    ComponentType_initEntries();
    return ComponentType_TOGGLE_BUTTON_instance;
  }
  function ComponentType_VIEW_JSON_BUTTON_getInstance() {
    ComponentType_initEntries();
    return ComponentType_VIEW_JSON_BUTTON_instance;
  }
  function ComponentType_PATIENT_SUMMARY_getInstance() {
    ComponentType_initEntries();
    return ComponentType_PATIENT_SUMMARY_instance;
  }
  function ComponentType_ALLERGY_ITEM_getInstance() {
    ComponentType_initEntries();
    return ComponentType_ALLERGY_ITEM_instance;
  }
  function ComponentType_CONDITION_ITEM_getInstance() {
    ComponentType_initEntries();
    return ComponentType_CONDITION_ITEM_instance;
  }
  function ComponentType_MEDICATION_ITEM_getInstance() {
    ComponentType_initEntries();
    return ComponentType_MEDICATION_ITEM_instance;
  }
  function ComponentType_OBSERVATION_ITEM_getInstance() {
    ComponentType_initEntries();
    return ComponentType_OBSERVATION_ITEM_instance;
  }
  function ComponentType_PROCEDURE_ITEM_getInstance() {
    ComponentType_initEntries();
    return ComponentType_PROCEDURE_ITEM_instance;
  }
  function ComponentType_IMMUNIZATION_ITEM_getInstance() {
    ComponentType_initEntries();
    return ComponentType_IMMUNIZATION_ITEM_instance;
  }
  function RenderingMode_STRUCTURED_getInstance() {
    RenderingMode_initEntries();
    return RenderingMode_STRUCTURED_instance;
  }
  function RenderingMode_TEXT_getInstance() {
    RenderingMode_initEntries();
    return RenderingMode_TEXT_instance;
  }
  function RenderingMode_HYBRID_getInstance() {
    RenderingMode_initEntries();
    return RenderingMode_HYBRID_instance;
  }
  function TargetPlatform_WEB_getInstance() {
    TargetPlatform_initEntries();
    return TargetPlatform_WEB_instance;
  }
  function TargetPlatform_ANDROID_getInstance() {
    TargetPlatform_initEntries();
    return TargetPlatform_ANDROID_instance;
  }
  function TargetPlatform_IOS_getInstance() {
    TargetPlatform_initEntries();
    return TargetPlatform_IOS_instance;
  }
  function RenderingTheme_DEFAULT_getInstance() {
    RenderingTheme_initEntries();
    return RenderingTheme_DEFAULT_instance;
  }
  function RenderingTheme_COMPACT_getInstance() {
    RenderingTheme_initEntries();
    return RenderingTheme_COMPACT_instance;
  }
  function RenderingTheme_DETAILED_getInstance() {
    RenderingTheme_initEntries();
    return RenderingTheme_DETAILED_instance;
  }
  function RenderingTheme_ACCESSIBILITY_FOCUSED_getInstance() {
    RenderingTheme_initEntries();
    return RenderingTheme_ACCESSIBILITY_FOCUSED_instance;
  }
  function ResourceRenderer() {
  }
  protoOf(ResourceRenderer).u1i = function (text, color, variant) {
    return new ComponentView(ComponentType_BADGE_getInstance(), new ComponentProps(text, color, VOID, variant));
  };
  protoOf(ResourceRenderer).v1i = function (text, color, variant, $super) {
    color = color === VOID ? 'primary' : color;
    variant = variant === VOID ? 'solid' : variant;
    return $super === VOID ? this.u1i(text, color, variant) : $super.u1i.call(this, text, color, variant);
  };
  protoOf(ResourceRenderer).w1i = function (text, isBold) {
    return new ComponentView(ComponentType_TEXT_getInstance(), new ComponentProps(text, VOID, VOID, VOID, VOID, isBold ? mapOf(to('font-weight', 'bold')) : emptyMap()));
  };
  protoOf(ResourceRenderer).x1i = function (text, isBold, $super) {
    isBold = isBold === VOID ? false : isBold;
    return $super === VOID ? this.w1i(text, isBold) : $super.w1i.call(this, text, isBold);
  };
  protoOf(ResourceRenderer).y1i = function (children) {
    return new ComponentView(ComponentType_CONTAINER_getInstance(), new ComponentProps(), children);
  };
  function formatPatientName_0($this, patient) {
    var tmp0_safe_receiver = patient.i1a_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return '';
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var name = tmp;
    // Inline function 'kotlin.text.trim' call
    var tmp2_safe_receiver = name.o1a_1;
    var tmp_0 = tmp2_safe_receiver == null ? null : joinToString(tmp2_safe_receiver, ' ');
    var tmp3_safe_receiver = name.p1a_1;
    var this_0 = joinToString(listOfNotNull([tmp_0, tmp3_safe_receiver == null ? null : joinToString(tmp3_safe_receiver, ' '), name.q1a_1]), ' ');
    return toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  }
  function createContactSection($this, patient, config) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var contactComponents = ArrayList_init_$Create$();
    var tmp0_safe_receiver = patient.l1a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!tmp0_safe_receiver.v()) {
        contactComponents.m(createTelecomTable($this, tmp0_safe_receiver));
        tmp = Unit_instance;
      }
    }
    var tmp1_safe_receiver = patient.m1a_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!tmp1_safe_receiver.v()) {
        contactComponents.m(createAddressTable($this, tmp1_safe_receiver));
        tmp_0 = Unit_instance;
      }
    }
    return new ComponentView(ComponentType_COLLAPSIBLE_SECTION_getInstance(), new ComponentProps(VOID, VOID, VOID, VOID, VOID, VOID, VOID, true, VOID, 'Contact Information'), contactComponents);
  }
  function createTelecomTable($this, telecoms) {
    var headers = listOf(['System', 'Use', 'Value']);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(telecoms, 10));
    var tmp0_iterator = telecoms.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'com.moreinformatics.ipsviewer.rendering.PatientRenderer.createTelecomTable.<anonymous>' call
      var tmp0_elvis_lhs = item.d1e_1;
      var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = item.e1e_1;
      var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = item.f1e_1;
      var tmp$ret$0 = listOf([tmp, tmp_0, tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs]);
      destination.m(tmp$ret$0);
    }
    var rows = destination;
    return new ComponentView(ComponentType_TABLE_getInstance(), new ComponentProps(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, 'Contact Details', VOID, VOID, VOID, VOID, headers, rows));
  }
  function createAddressTable($this, addresses) {
    var addressText = joinToString(addresses, '\n', VOID, VOID, VOID, VOID, PatientRenderer$createAddressTable$lambda);
    return $this.x1i('Address: ' + addressText);
  }
  function PatientRenderer$createAddressTable$lambda(address) {
    var tmp0_safe_receiver = address.k1e_1;
    return joinToString(listOfNotNull([tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ', '), address.l1e_1, address.m1e_1, address.n1e_1, address.o1e_1]), ', ');
  }
  function PatientRenderer() {
    ResourceRenderer.call(this);
  }
  protoOf(PatientRenderer).g1g = function (resource, config) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var components = ArrayList_init_$Create$();
    var name = formatPatientName_0(this, resource);
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(name)) {
      components.m(this.w1i(name, true));
    }
    var tmp0_safe_receiver = resource.j1a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.PatientRenderer.render.<anonymous>' call
      components.m(this.x1i('Birth Date: ' + formatDate(tmp0_safe_receiver)));
    }
    var tmp1_safe_receiver = resource.k1a_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.PatientRenderer.render.<anonymous>' call
      components.m(this.x1i('Gender: ' + tmp1_safe_receiver));
    }
    if ((!(resource.l1a_1 == null) ? true : !(resource.m1a_1 == null)) ? true : !(resource.n1a_1 == null)) {
      components.m(createContactSection(this, resource, config));
    }
    return this.y1i(components);
  };
  function createReactionSection($this, reactions) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(reactions, 10));
    var tmp0_iterator = reactions.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.createReactionSection.<anonymous>' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var reactionDetails = ArrayList_init_$Create$();
      var tmp0_safe_receiver = item.m1f_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = tmp0_safe_receiver.p();
        while (tmp0_iterator_0.q()) {
          var element = tmp0_iterator_0.r();
          // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.createReactionSection.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver_0 = element.e1b_1;
          var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : firstOrNull(tmp0_safe_receiver_0);
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i1b_1;
          if (tmp2_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            reactionDetails.m($this.x1i('\u2022 ' + tmp2_safe_receiver));
          }
        }
      }
      var tmp1_safe_receiver_0 = item.n1f_1;
      if (tmp1_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.createReactionSection.<anonymous>.<anonymous>' call
        reactionDetails.m($this.v1i('Severity: ' + tmp1_safe_receiver_0, 'warning'));
      }
      var tmp$ret$4 = $this.y1i(reactionDetails);
      destination.m(tmp$ret$4);
    }
    var reactionComponents = destination;
    return new ComponentView(ComponentType_COLLAPSIBLE_SECTION_getInstance(), new ComponentProps(VOID, VOID, VOID, VOID, VOID, VOID, VOID, false, VOID, 'Reactions'), reactionComponents);
  }
  function AllergyIntoleranceRenderer() {
    ResourceRenderer.call(this);
  }
  protoOf(AllergyIntoleranceRenderer).o1g = function (resource, config) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var components = ArrayList_init_$Create$();
    if (!(resource.b1f_1 == null) ? true : !(resource.c1f_1 == null)) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.render.<anonymous>' call
      var tmp0_safe_receiver = resource.b1f_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1b_1;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.h1b_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.render.<anonymous>.<anonymous>' call
        this_0.i4(tmp3_safe_receiver);
      }
      if (!(resource.b1f_1 == null) ? !(resource.c1f_1 == null) : false) {
        this_0.i4('/');
      }
      var tmp4_safe_receiver = resource.c1f_1;
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.e1b_1;
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : firstOrNull(tmp5_safe_receiver);
      var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.h1b_1;
      if (tmp7_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this_0.i4(tmp7_safe_receiver);
      }
      var statusText = this_0.toString();
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(statusText)) {
        components.m(this.v1i(statusText, 'primary'));
      }
    }
    var criticalityColor;
    switch (resource.e1f_1) {
      case 'high':
        criticalityColor = 'danger';
        break;
      case 'low':
        criticalityColor = 'primary';
        break;
      default:
        criticalityColor = 'secondary';
        break;
    }
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_1 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.render.<anonymous>' call
    var tmp0_safe_receiver_0 = resource.d1f_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.render.<anonymous>.<anonymous>' call
      this_1.i4(tmp0_safe_receiver_0 + ' - ');
    }
    var tmp1_elvis_lhs = resource.e1f_1;
    this_1.i4('criticality: ' + (tmp1_elvis_lhs == null ? 'unknown' : tmp1_elvis_lhs));
    var criticalityText = this_1.toString();
    components.m(this.v1i(criticalityText, criticalityColor));
    var tmp1_safe_receiver_0 = resource.f1f_1;
    if (tmp1_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.render.<anonymous>' call
      var tmp0_safe_receiver_1 = tmp1_safe_receiver_0.e1b_1;
      var tmp1_safe_receiver_1 = tmp0_safe_receiver_1 == null ? null : firstOrNull(tmp0_safe_receiver_1);
      var tmp;
      if (tmp1_safe_receiver_1 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(tmp1_safe_receiver_1.g1b_1 == null) ? !(tmp1_safe_receiver_1.h1b_1 == null) : false) {
          components.m(this.v1i('' + tmp1_safe_receiver_1.g1b_1 + ' : ' + tmp1_safe_receiver_1.h1b_1, 'primary'));
        }
        var tmp0_elvis_lhs = tmp1_safe_receiver_1.i1b_1;
        var displayText = tmp0_elvis_lhs == null ? tmp1_safe_receiver_0.f1b_1 : tmp0_elvis_lhs;
        var tmp_0;
        if (!(displayText == null)) {
          components.m(this.w1i(displayText, true));
          tmp_0 = Unit_instance;
        }
        tmp = Unit_instance;
      }
      var tmp3_elvis_lhs = tmp;
      var tmp_1;
      if (tmp3_elvis_lhs == null) {
        var tmp2_safe_receiver_0 = tmp1_safe_receiver_0.f1b_1;
        var tmp_2;
        if (tmp2_safe_receiver_0 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.render.<anonymous>.<anonymous>' call
          tmp_2 = components.m(this.w1i(tmp2_safe_receiver_0, true));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = tmp3_elvis_lhs;
      }
    }
    var tmp2_safe_receiver_1 = resource.i1f_1;
    var tmp3_safe_receiver_0 = tmp2_safe_receiver_1 == null ? null : firstOrNull(tmp2_safe_receiver_1);
    var tmp4_safe_receiver_0 = tmp3_safe_receiver_0 == null ? null : tmp3_safe_receiver_0.b1g_1;
    if (tmp4_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.AllergyIntoleranceRenderer.render.<anonymous>' call
      components.m(this.x1i('Note: ' + tmp4_safe_receiver_0));
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var this_2 = resource.h1f_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(this_2 == null ? true : this_2.v())) {
      components.m(createReactionSection(this, resource.h1f_1));
    }
    return this.y1i(components);
  };
  function ConditionRenderer() {
    ResourceRenderer.call(this);
  }
  protoOf(ConditionRenderer).p1g = function (resource, config) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var components = ArrayList_init_$Create$();
    var tmp0_safe_receiver = resource.t1f_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1b_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : firstOrNull(tmp1_safe_receiver);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.h1b_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.ConditionRenderer.render.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var color;
      switch (tmp3_safe_receiver.toLowerCase()) {
        case 'active':
          color = 'danger';
          break;
        case 'inactive':
          color = 'secondary';
          break;
        case 'resolved':
          color = 'success';
          break;
        default:
          color = 'primary';
          break;
      }
      components.m(this.v1i(tmp3_safe_receiver, color));
    }
    var tmp4_safe_receiver = resource.u1f_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.e1b_1;
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : firstOrNull(tmp5_safe_receiver);
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.h1b_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.ConditionRenderer.render.<anonymous>' call
      components.m(this.v1i(tmp7_safe_receiver, 'info'));
    }
    var tmp8_safe_receiver = resource.v1f_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.ConditionRenderer.render.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp8_safe_receiver.e1b_1;
      var tmp1_safe_receiver_0 = tmp0_safe_receiver_0 == null ? null : firstOrNull(tmp0_safe_receiver_0);
      var tmp;
      if (tmp1_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(tmp1_safe_receiver_0.g1b_1 == null) ? !(tmp1_safe_receiver_0.h1b_1 == null) : false) {
          components.m(this.v1i('' + tmp1_safe_receiver_0.g1b_1 + ' : ' + tmp1_safe_receiver_0.h1b_1, 'primary'));
        }
        var tmp0_elvis_lhs = tmp1_safe_receiver_0.i1b_1;
        var displayText = tmp0_elvis_lhs == null ? tmp8_safe_receiver.f1b_1 : tmp0_elvis_lhs;
        var tmp_0;
        if (!(displayText == null)) {
          components.m(this.w1i(displayText, true));
          tmp_0 = Unit_instance;
        }
        tmp = Unit_instance;
      }
      var tmp3_elvis_lhs = tmp;
      var tmp_1;
      if (tmp3_elvis_lhs == null) {
        var tmp2_safe_receiver_0 = tmp8_safe_receiver.f1b_1;
        var tmp_2;
        if (tmp2_safe_receiver_0 == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.moreinformatics.ipsviewer.rendering.ConditionRenderer.render.<anonymous>.<anonymous>' call
          tmp_2 = components.m(this.w1i(tmp2_safe_receiver_0, true));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = tmp3_elvis_lhs;
      }
    }
    var tmp9_safe_receiver = resource.x1f_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.ConditionRenderer.render.<anonymous>' call
      components.m(this.x1i('Onset: ' + formatDate(tmp9_safe_receiver)));
    }
    var tmp10_safe_receiver = resource.y1f_1;
    var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.e1b_1;
    var tmp12_safe_receiver = tmp11_safe_receiver == null ? null : firstOrNull(tmp11_safe_receiver);
    var tmp13_safe_receiver = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.i1b_1;
    if (tmp13_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.ConditionRenderer.render.<anonymous>' call
      components.m(this.v1i('Severity: ' + tmp13_safe_receiver, 'warning'));
    }
    return this.y1i(components);
  };
  function getMedicationName($this, resource) {
    var tmp0_safe_receiver = resource.c10('medicationCodeableConcept');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp;
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c10('coding')) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.MedicationRenderer.getMedicationName.<anonymous>' call
      tmp = 'Medication';
    }
    var tmp7_elvis_lhs = tmp;
    var tmp_0;
    if (tmp7_elvis_lhs == null) {
      var tmp3_safe_receiver = resource.c10('medicationReference');
      var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonObject(tmp3_safe_receiver);
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.c10('display');
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonPrimitive(tmp5_safe_receiver);
      tmp_0 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.d10();
    } else {
      tmp_0 = tmp7_elvis_lhs;
    }
    return tmp_0;
  }
  function MedicationRenderer() {
    ResourceRenderer.call(this);
  }
  protoOf(MedicationRenderer).q1g = function (resource, config) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var components = ArrayList_init_$Create$();
    var tmp0_safe_receiver = resource.c10('status');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d10();
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.MedicationRenderer.render.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var color;
      switch (tmp2_safe_receiver.toLowerCase()) {
        case 'active':
          color = 'success';
          break;
        case 'stopped':
          color = 'danger';
          break;
        case 'completed':
          color = 'secondary';
          break;
        default:
          color = 'primary';
          break;
      }
      components.m(this.v1i(tmp2_safe_receiver, color));
    }
    var tmp3_safe_receiver = getMedicationName(this, resource);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.MedicationRenderer.render.<anonymous>' call
      components.m(this.w1i(tmp3_safe_receiver, true));
    }
    if (resource.c10('dosageInstruction') == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.moreinformatics.ipsviewer.rendering.MedicationRenderer.render.<anonymous>' call
      components.m(this.x1i('See dosage instructions'));
    }
    return this.y1i(components);
  };
  function formatDate(dateStr) {
    var tmp;
    try {
      var instant = Companion_getInstance().v18(dateStr);
      var localDateTime = toLocalDateTime(instant, Companion_getInstance_0().c19_1);
      var day = padStart(localDateTime.r19().toString(), 2, _Char___init__impl__6a9atx(48));
      var month = getMonthAbbreviation(localDateTime.q19());
      var year = localDateTime.p19();
      tmp = day + '-' + month + '-' + year;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = dateStr;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function getMonthAbbreviation(monthNumber) {
    switch (monthNumber) {
      case 1:
        return 'Jan';
      case 2:
        return 'Feb';
      case 3:
        return 'Mar';
      case 4:
        return 'Apr';
      case 5:
        return 'May';
      case 6:
        return 'Jun';
      case 7:
        return 'Jul';
      case 8:
        return 'Aug';
      case 9:
        return 'Sep';
      case 10:
        return 'Oct';
      case 11:
        return 'Nov';
      case 12:
        return 'Dec';
      default:
        return '???';
    }
  }
  function getEntry(entries, reference) {
    if (entries.v()) {
      return null;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = entries.p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'com.moreinformatics.ipsviewer.utils.getEntry.<anonymous>' call
      var tmp0_safe_receiver = element.w19_1;
      if ((tmp0_safe_receiver == null ? null : contains(tmp0_safe_receiver, reference)) === true) {
        return element;
      }
    }
    var splitReference = split(reference, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var referenceId = lastOrNull(splitReference);
    var referenceResourceType = splitReference.s() >= 2 ? splitReference.z(splitReference.s() - 2 | 0) : null;
    if (!(referenceResourceType == null) ? !(referenceId == null) : false) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = entries.p();
      while (tmp0_iterator_0.q()) {
        var element_0 = tmp0_iterator_0.r();
        // Inline function 'com.moreinformatics.ipsviewer.utils.getEntry.<anonymous>' call
        var tmp;
        var tmp0_safe_receiver_0 = element_0.x19_1;
        if ((tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.y19_1) == referenceResourceType) {
          var tmp1_safe_receiver = element_0.w19_1;
          tmp = (tmp1_safe_receiver == null ? null : contains(tmp1_safe_receiver, referenceId)) === true;
        } else {
          tmp = false;
        }
        if (tmp) {
          return element_0;
        }
      }
    }
    println('Missing reference: ' + reference);
    return null;
  }
  function joinNonEmpty(strings, separator) {
    separator = separator === VOID ? ' ' : separator;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = filterNotNull(strings);
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'com.moreinformatics.ipsviewer.utils.joinNonEmpty.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element)) {
        destination.m(element);
      }
    }
    return joinToString(destination, separator);
  }
  function IpsViewerJS$json$lambda($this$Json) {
    $this$Json.xy_1 = true;
    return Unit_instance;
  }
  function IpsViewerJS() {
    this.z1i_1 = new IpsProcessor();
    this.a1j_1 = new EnhancedIpsProcessor();
    var tmp = this;
    tmp.b1j_1 = Json(VOID, IpsViewerJS$json$lambda);
  }
  protoOf(IpsViewerJS).c1j = function (bundleJson, mode) {
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = this.b1j_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Bundle), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var bundle = this_0.ey(tmp$ret$1, bundleJson);
      var config = new IpsProcessingConfig(mode === 'text' ? ProcessingMode_TEXT_getInstance() : ProcessingMode_APP_getInstance());
      var processorWithConfig = new IpsProcessor(config);
      var result = processorWithConfig.r1a(bundle);
      tmp = this.b1j_1.dy(Companion_getInstance_7().i10(), result);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        var errorResult = new IpsProcessingResult(emptyMap(), listOf_0('Failed to process bundle: ' + e.message));
        tmp_0 = this.b1j_1.dy(Companion_getInstance_7().i10(), errorResult);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(IpsViewerJS).processIpsBundle = function (bundleJson, mode, $super) {
    mode = mode === VOID ? 'app' : mode;
    return this.c1j(bundleJson, mode);
  };
  protoOf(IpsViewerJS).d1j = function (bundleJson, mode, platform) {
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = this.b1j_1;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.th();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(Bundle), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var bundle = this_0.ey(tmp$ret$1, bundleJson);
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var renderingMode;
      switch (mode.toLowerCase()) {
        case 'text':
          renderingMode = RenderingMode_TEXT_getInstance();
          break;
        case 'hybrid':
          renderingMode = RenderingMode_HYBRID_getInstance();
          break;
        default:
          renderingMode = RenderingMode_STRUCTURED_getInstance();
          break;
      }
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var targetPlatform;
      switch (platform.toLowerCase()) {
        case 'android':
          targetPlatform = TargetPlatform_ANDROID_getInstance();
          break;
        case 'ios':
          targetPlatform = TargetPlatform_IOS_getInstance();
          break;
        default:
          targetPlatform = TargetPlatform_WEB_getInstance();
          break;
      }
      var config = new RenderingConfig(renderingMode, targetPlatform);
      var result = this.a1j_1.r1a(bundle);
      tmp = this.b1j_1.dy(Companion_getInstance_33().i10(), result);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        var errorResult = new IpsRenderingResult(emptyMap(), VOID, listOf_0('Failed to process bundle: ' + e.message));
        tmp_0 = this.b1j_1.dy(Companion_getInstance_33().i10(), errorResult);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(IpsViewerJS).processIpsBundleWithRendering = function (bundleJson, mode, platform, $super) {
    mode = mode === VOID ? 'structured' : mode;
    platform = platform === VOID ? 'web' : platform;
    return this.d1j(bundleJson, mode, platform);
  };
  protoOf(IpsViewerJS).formatDate = function (dateString) {
    return formatDate(dateString);
  };
  protoOf(IpsViewerJS).getVersion = function () {
    return '2.0.0';
  };
  protoOf(IpsViewerJS).getSupportedComponentTypes = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = values_2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.moreinformatics.ipsviewer.platform.IpsViewerJS.getSupportedComponentTypes.<anonymous>' call
      var tmp$ret$0 = item.z6_1;
      destination.m(tmp$ret$0);
    }
    var types = destination;
    return this.b1j_1.dy(ListSerializer(serializer_0(StringCompanionObject_instance)), types);
  };
  function createIpsViewer() {
    return new IpsViewerJS();
  }
  function createEnhancedIpsViewer() {
    return new IpsViewerJS();
  }
  //region block: post-declaration
  protoOf($serializer).hp = typeParametersSerializers;
  protoOf($serializer_0).hp = typeParametersSerializers;
  protoOf($serializer_1).hp = typeParametersSerializers;
  protoOf($serializer_2).hp = typeParametersSerializers;
  protoOf($serializer_3).hp = typeParametersSerializers;
  protoOf($serializer_4).hp = typeParametersSerializers;
  protoOf($serializer_5).hp = typeParametersSerializers;
  protoOf($serializer_6).hp = typeParametersSerializers;
  protoOf($serializer_7).hp = typeParametersSerializers;
  protoOf($serializer_8).hp = typeParametersSerializers;
  protoOf($serializer_9).hp = typeParametersSerializers;
  protoOf($serializer_10).hp = typeParametersSerializers;
  protoOf($serializer_11).hp = typeParametersSerializers;
  protoOf($serializer_12).hp = typeParametersSerializers;
  protoOf($serializer_13).hp = typeParametersSerializers;
  protoOf($serializer_14).hp = typeParametersSerializers;
  protoOf($serializer_15).hp = typeParametersSerializers;
  protoOf($serializer_16).hp = typeParametersSerializers;
  protoOf($serializer_17).hp = typeParametersSerializers;
  protoOf($serializer_18).hp = typeParametersSerializers;
  protoOf($serializer_19).hp = typeParametersSerializers;
  protoOf($serializer_20).hp = typeParametersSerializers;
  protoOf($serializer_21).hp = typeParametersSerializers;
  protoOf($serializer_22).hp = typeParametersSerializers;
  protoOf($serializer_23).hp = typeParametersSerializers;
  protoOf($serializer_24).hp = typeParametersSerializers;
  protoOf($serializer_25).hp = typeParametersSerializers;
  protoOf($serializer_26).hp = typeParametersSerializers;
  protoOf($serializer_27).hp = typeParametersSerializers;
  protoOf($serializer_28).hp = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion_0();
  Companion_instance_9 = new Companion_9();
  Companion_instance_10 = new Companion_10();
  Companion_instance_13 = new Companion_13();
  Companion_instance_15 = new Companion_15();
  Companion_instance_16 = new Companion_16();
  Companion_instance_19 = new Companion_19();
  Companion_instance_24 = new Companion_24();
  Companion_instance_25 = new Companion_25();
  Companion_instance_29 = new Companion_29();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$moreinformatics = $com.moreinformatics || ($com.moreinformatics = {});
    var $com$moreinformatics$ipsviewer = $com$moreinformatics.ipsviewer || ($com$moreinformatics.ipsviewer = {});
    var $com$moreinformatics$ipsviewer$platform = $com$moreinformatics$ipsviewer.platform || ($com$moreinformatics$ipsviewer.platform = {});
    $com$moreinformatics$ipsviewer$platform.IpsViewerJS = IpsViewerJS;
    $com$moreinformatics$ipsviewer$platform.createIpsViewer = createIpsViewer;
    $com$moreinformatics$ipsviewer$platform.createEnhancedIpsViewer = createEnhancedIpsViewer;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=ips-viewer-kotlin.js.map
