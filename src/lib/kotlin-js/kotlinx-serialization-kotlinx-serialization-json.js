(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json'], this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var protoOf = kotlin_kotlin.$_$.h7;
  var objectMeta = kotlin_kotlin.$_$.g7;
  var setMetadataFor = kotlin_kotlin.$_$.i7;
  var Unit_instance = kotlin_kotlin.$_$.o3;
  var classMeta = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.m7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var charSequenceLength = kotlin_kotlin.$_$.e6;
  var charSequenceGet = kotlin_kotlin.$_$.d6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h1;
  var equals = kotlin_kotlin.$_$.h6;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var interfaceMeta = kotlin_kotlin.$_$.n6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var hashCode = kotlin_kotlin.$_$.m6;
  var joinToString = kotlin_kotlin.$_$.b5;
  var Map = kotlin_kotlin.$_$.x3;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var List = kotlin_kotlin.$_$.v3;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.w9;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var getBooleanHashCode = kotlin_kotlin.$_$.j6;
  var getStringHashCode = kotlin_kotlin.$_$.l6;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.c3;
  var numberRangeToNumber = kotlin_kotlin.$_$.b7;
  var ClosedRange = kotlin_kotlin.$_$.n7;
  var isInterface = kotlin_kotlin.$_$.w6;
  var contains = kotlin_kotlin.$_$.q7;
  var toDouble = kotlin_kotlin.$_$.i8;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.e3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var toLongOrNull = kotlin_kotlin.$_$.l8;
  var toULongOrNull = kotlin_kotlin.$_$.o8;
  var ULong = kotlin_kotlin.$_$.l9;
  var Companion_getInstance = kotlin_kotlin.$_$.m3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.h2;
  var toDoubleOrNull = kotlin_kotlin.$_$.h8;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.g8;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var lazy_0 = kotlin_kotlin.$_$.x9;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.u7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k6;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var toLong = kotlin_kotlin.$_$.k7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.x1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.z1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.g2;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.i2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.o1;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.q1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.p2;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.r2;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var captureStack = kotlin_kotlin.$_$.a6;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceSubSequence = kotlin_kotlin.$_$.f6;
  var coerceAtLeast = kotlin_kotlin.$_$.o7;
  var coerceAtMost = kotlin_kotlin.$_$.p7;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var singleOrNull = kotlin_kotlin.$_$.o5;
  var emptyMap = kotlin_kotlin.$_$.s4;
  var getValue = kotlin_kotlin.$_$.x4;
  var fillArrayVal = kotlin_kotlin.$_$.i6;
  var copyOf = kotlin_kotlin.$_$.o4;
  var copyOf_0 = kotlin_kotlin.$_$.p4;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.v8;
  var invoke = kotlin_kotlin.$_$.t9;
  var CoroutineImpl = kotlin_kotlin.$_$.w5;
  var DeepRecursiveScope = kotlin_kotlin.$_$.w8;
  var Unit = kotlin_kotlin.$_$.o9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var getKClass = kotlin_kotlin.$_$.d;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var ensureNotNull = kotlin_kotlin.$_$.s9;
  var contains_0 = kotlin_kotlin.$_$.w7;
  var plus = kotlin_kotlin.$_$.z9;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var IllegalArgumentException = kotlin_kotlin.$_$.z8;
  var isFinite = kotlin_kotlin.$_$.v9;
  var isFinite_0 = kotlin_kotlin.$_$.u9;
  var toUInt = kotlin_kotlin.$_$.n8;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y1;
  var toULong = kotlin_kotlin.$_$.p8;
  var toUByte = kotlin_kotlin.$_$.m8;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.p1;
  var toUShort = kotlin_kotlin.$_$.q8;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.q2;
  var objectCreate = kotlin_kotlin.$_$.f7;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var toString_0 = kotlin_kotlin.$_$.k1;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.k3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var setOf = kotlin_kotlin.$_$.n5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j1;
  var numberToChar = kotlin_kotlin.$_$.c7;
  var equals_0 = kotlin_kotlin.$_$.x7;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.x;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.z2;
  var toByte = kotlin_kotlin.$_$.j7;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.d3;
  var toShort = kotlin_kotlin.$_$.l7;
  var single = kotlin_kotlin.$_$.d8;
  var Char = kotlin_kotlin.$_$.u8;
  var emptySet = kotlin_kotlin.$_$.t4;
  var plus_0 = kotlin_kotlin.$_$.l5;
  var toInt = kotlin_kotlin.$_$.k8;
  var toList = kotlin_kotlin.$_$.r5;
  var Enum = kotlin_kotlin.$_$.x8;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.y9;
  var last = kotlin_kotlin.$_$.f5;
  var removeLast = kotlin_kotlin.$_$.m5;
  var lastIndexOf = kotlin_kotlin.$_$.b8;
  var Long = kotlin_kotlin.$_$.a9;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.i3;
  var numberToLong = kotlin_kotlin.$_$.e7;
  var charArray = kotlin_kotlin.$_$.c6;
  var indexOf = kotlin_kotlin.$_$.y7;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Json);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta);
  setMetadataFor(JsonNames, 'JsonNames', classMeta);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], VOID, VOID, {0: JsonArraySerializer_getInstance});
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNull_getInstance});
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(defer$1, VOID, classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Composer, 'Composer', classMeta);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer);
  setMetadataFor(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', classMeta, Composer);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, VOID, VOID, JsonPath);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, VOID, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, VOID, [SerializersModuleCollector]);
  setMetadataFor(Key, 'Key', classMeta, VOID, VOID, Key);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, VOID, VOID, DescriptorSchemaCache);
  setMetadataFor(DiscriminatorHolder, 'DiscriminatorHolder', classMeta);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', classMeta, AbstractJsonTreeDecoder);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer);
  setMetadataFor(JsonToStringWriter, 'JsonToStringWriter', classMeta, VOID, VOID, JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.ay_1 = configuration;
    this.by_1 = serializersModule;
    this.cy_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).th = function () {
    return this.by_1;
  };
  protoOf(Json).dy = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.hy();
    }
  };
  protoOf(Json).ey = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.de(), null);
    var result = input.dh(deserializer);
    lexer.uy();
    return result;
  };
  protoOf(Json).fy = function (string) {
    return this.ey(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.vm();
    return new JsonImpl(conf, builder.jz_1);
  }
  function JsonBuilder(json) {
    this.vy_1 = json.ay_1.kz_1;
    this.wy_1 = json.ay_1.pz_1;
    this.xy_1 = json.ay_1.lz_1;
    this.yy_1 = json.ay_1.mz_1;
    this.zy_1 = json.ay_1.nz_1;
    this.az_1 = json.ay_1.oz_1;
    this.bz_1 = json.ay_1.qz_1;
    this.cz_1 = json.ay_1.rz_1;
    this.dz_1 = json.ay_1.sz_1;
    this.ez_1 = json.ay_1.tz_1;
    this.fz_1 = json.ay_1.uz_1;
    this.gz_1 = json.ay_1.vz_1;
    this.hz_1 = json.ay_1.wz_1;
    this.iz_1 = json.ay_1.xz_1;
    this.jz_1 = json.th();
  }
  protoOf(JsonBuilder).vm = function () {
    if (this.dz_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.ez_1 === 'type')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.az_1) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this.bz_1 === '    ')) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.bz_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var indexedObject = this.bz_1;
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(indexedObject)) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          if (!(((element === _Char___init__impl__6a9atx(32) ? true : element === _Char___init__impl__6a9atx(9)) ? true : element === _Char___init__impl__6a9atx(13)) ? true : element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.bz_1;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.vy_1, this.xy_1, this.yy_1, this.zy_1, this.az_1, this.wy_1, this.bz_1, this.cz_1, this.dz_1, this.ez_1, this.fz_1, this.gz_1, this.hz_1, this.iz_1);
  };
  function validateConfiguration($this) {
    if (equals($this.th(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new PolymorphismValidator($this.ay_1.sz_1, $this.ay_1.tz_1);
    $this.th().jx(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    this.kz_1 = encodeDefaults;
    this.lz_1 = ignoreUnknownKeys;
    this.mz_1 = isLenient;
    this.nz_1 = allowStructuredMapKeys;
    this.oz_1 = prettyPrint;
    this.pz_1 = explicitNulls;
    this.qz_1 = prettyPrintIndent;
    this.rz_1 = coerceInputValues;
    this.sz_1 = useArrayPolymorphism;
    this.tz_1 = classDiscriminator;
    this.uz_1 = allowSpecialFloatingPointValues;
    this.vz_1 = useAlternativeNames;
    this.wz_1 = namingStrategy;
    this.xz_1 = decodeEnumsCaseInsensitive;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.kz_1 + ', ignoreUnknownKeys=' + this.lz_1 + ', isLenient=' + this.mz_1 + ', ' + ('allowStructuredMapKeys=' + this.nz_1 + ', prettyPrint=' + this.oz_1 + ', explicitNulls=' + this.pz_1 + ', ') + ("prettyPrintIndent='" + this.qz_1 + "', coerceInputValues=" + this.rz_1 + ', useArrayPolymorphism=' + this.sz_1 + ', ') + ("classDiscriminator='" + this.tz_1 + "', allowSpecialFloatingPointValues=" + this.uz_1 + ', useAlternativeNames=' + this.vz_1 + ', ') + ('namingStrategy=' + this.wz_1 + ', decodeEnumsCaseInsensitive=' + this.xz_1 + ')');
  };
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var k = _name_for_destructuring_parameter_0__wldtmu.v2();
    // Inline function 'kotlin.collections.component2' call
    var v = _name_for_destructuring_parameter_0__wldtmu.l3();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(this_0, k);
    this_0.j4(_Char___init__impl__6a9atx(58));
    this_0.h4(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.a10_1 = content;
  }
  protoOf(JsonObject).t1 = function () {
    return this.a10_1.t1();
  };
  protoOf(JsonObject).m1 = function () {
    return this.a10_1.m1();
  };
  protoOf(JsonObject).s = function () {
    return this.a10_1.s();
  };
  protoOf(JsonObject).b10 = function (key) {
    return this.a10_1.q1(key);
  };
  protoOf(JsonObject).q1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.b10((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).c10 = function (key) {
    return this.a10_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.c10((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).v = function () {
    return this.a10_1.v();
  };
  protoOf(JsonObject).equals = function (other) {
    return equals(this.a10_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.a10_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.a10_1.t1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  function get_jsonObject(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.d10();
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_7() {
    return Companion_instance_3;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.e10_1 = content;
  }
  protoOf(JsonArray).s = function () {
    return this.e10_1.s();
  };
  protoOf(JsonArray).f10 = function (elements) {
    return this.e10_1.u(elements);
  };
  protoOf(JsonArray).u = function (elements) {
    return this.f10(elements);
  };
  protoOf(JsonArray).z = function (index) {
    return this.e10_1.z(index);
  };
  protoOf(JsonArray).v = function () {
    return this.e10_1.v();
  };
  protoOf(JsonArray).p = function () {
    return this.e10_1.p();
  };
  protoOf(JsonArray).equals = function (other) {
    return equals(this.e10_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.e10_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.e10_1, ',', '[', ']');
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.h10_1.l3();
  }
  function JsonNull$_anonymous__enib48() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.g10_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.h10_1 = lazy(tmp_0, JsonNull$_anonymous__enib48);
  }
  protoOf(JsonNull).d10 = function () {
    return this.g10_1;
  };
  protoOf(JsonNull).i10 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(JsonNull).rp = function (typeParamsSerializers) {
    return this.i10();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.j10_1 = isString;
    this.k10_1 = coerceToInlineType;
    this.l10_1 = toString(body);
    if (!(this.k10_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!this.k10_1.kf()) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).d10 = function () {
    return this.l10_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.j10_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(this_0, this.l10_1);
      tmp = this_0.toString();
    } else {
      tmp = this.l10_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.j10_1 === other.j10_1))
      return false;
    if (!(this.l10_1 === other.l10_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.j10_1);
    result = imul(31, result) + getStringHashCode(this.l10_1) | 0;
    return result;
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.d10());
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-int>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.d10())).m10();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(IntCompanionObject_instance.MIN_VALUE, IntCompanionObject_instance.MAX_VALUE);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.d10() + ' is not an Int');
    return result.l7();
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.mapExceptions' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.<get-long>.<anonymous>' call
      tmp = (new StringJsonLexer(_this__u8e3s4.d10())).m10();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.d10();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.d10());
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.d10();
    }
    return tmp;
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.oe('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.oe('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.oe('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.oe('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.oe('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().n10_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().o10_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().p10_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().q10_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().r10_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.s10_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).de = function () {
    return this.s10_1;
  };
  protoOf(JsonElementSerializer).t10 = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.wi(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.wi(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.wi(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  protoOf(JsonElementSerializer).ee = function (encoder, value) {
    return this.t10(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).fe = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.zz();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.u10_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).de();
    this.v10_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).if = function () {
    return this.u10_1.if();
  };
  protoOf(JsonObjectDescriptor).jf = function () {
    return this.u10_1.jf();
  };
  protoOf(JsonObjectDescriptor).kf = function () {
    return this.u10_1.kf();
  };
  protoOf(JsonObjectDescriptor).df = function () {
    return this.u10_1.df();
  };
  protoOf(JsonObjectDescriptor).lf = function () {
    return this.u10_1.lf();
  };
  protoOf(JsonObjectDescriptor).mf = function (index) {
    return this.u10_1.mf(index);
  };
  protoOf(JsonObjectDescriptor).nf = function (index) {
    return this.u10_1.nf(index);
  };
  protoOf(JsonObjectDescriptor).of = function (name) {
    return this.u10_1.of(name);
  };
  protoOf(JsonObjectDescriptor).pf = function (index) {
    return this.u10_1.pf(index);
  };
  protoOf(JsonObjectDescriptor).qf = function (index) {
    return this.u10_1.qf(index);
  };
  protoOf(JsonObjectDescriptor).hf = function () {
    return this.v10_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.q10_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).de = function () {
    return this.q10_1;
  };
  protoOf(JsonObjectSerializer).w10 = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).ee(encoder, value);
  };
  protoOf(JsonObjectSerializer).ee = function (encoder, value) {
    return this.w10(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).fe = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).fe(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.n10_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).de = function () {
    return this.n10_1;
  };
  protoOf(JsonPrimitiveSerializer).x10 = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.wi(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.wi(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).ee = function (encoder, value) {
    return this.x10(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).fe = function (decoder) {
    var result = asJsonDecoder(decoder).zz();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.o10_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).de = function () {
    return this.o10_1;
  };
  protoOf(JsonNullSerializer).y10 = function (encoder, value) {
    verify(encoder);
    encoder.zh();
  };
  protoOf(JsonNullSerializer).ee = function (encoder, value) {
    return this.y10(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).fe = function (decoder) {
    verify_0(decoder);
    if (decoder.pg()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.qg();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.p10_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).de = function () {
    return this.p10_1;
  };
  protoOf(JsonLiteralSerializer).z10 = function (encoder, value) {
    verify(encoder);
    if (value.j10_1) {
      return encoder.ii(value.l10_1);
    }
    if (!(value.k10_1 == null)) {
      return encoder.ki(value.k10_1).ii(value.l10_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.l10_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ei(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.l10_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.contracts.contract' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).ld_1;
      var tmp_1 = encoder.ki(serializer_0(Companion_getInstance()).de());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.ei(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.l10_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.gi(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.l10_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.ai(tmp3_safe_receiver);
    }
    encoder.ii(value.l10_1);
  };
  protoOf(JsonLiteralSerializer).ee = function (encoder, value) {
    return this.z10(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).fe = function (decoder) {
    var result = asJsonDecoder(decoder).zz();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.a11_1 = ListSerializer(JsonElementSerializer_getInstance()).de();
    this.b11_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).if = function () {
    return this.a11_1.if();
  };
  protoOf(JsonArrayDescriptor).jf = function () {
    return this.a11_1.jf();
  };
  protoOf(JsonArrayDescriptor).kf = function () {
    return this.a11_1.kf();
  };
  protoOf(JsonArrayDescriptor).df = function () {
    return this.a11_1.df();
  };
  protoOf(JsonArrayDescriptor).lf = function () {
    return this.a11_1.lf();
  };
  protoOf(JsonArrayDescriptor).mf = function (index) {
    return this.a11_1.mf(index);
  };
  protoOf(JsonArrayDescriptor).nf = function (index) {
    return this.a11_1.nf(index);
  };
  protoOf(JsonArrayDescriptor).of = function (name) {
    return this.a11_1.of(name);
  };
  protoOf(JsonArrayDescriptor).pf = function (index) {
    return this.a11_1.pf(index);
  };
  protoOf(JsonArrayDescriptor).qf = function (index) {
    return this.a11_1.qf(index);
  };
  protoOf(JsonArrayDescriptor).hf = function () {
    return this.b11_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.r10_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).de = function () {
    return this.r10_1;
  };
  protoOf(JsonArraySerializer).c11 = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).ee(encoder, value);
  };
  protoOf(JsonArraySerializer).ee = function (encoder, value) {
    return this.c11(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).fe = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).fe(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.d11_1;
    original$factory();
    return this_0.l3();
  }
  function defer$1($deferred) {
    this.d11_1 = lazy_0($deferred);
  }
  protoOf(defer$1).hf = function () {
    return _get_original__l7ku1m(this).hf();
  };
  protoOf(defer$1).lf = function () {
    return _get_original__l7ku1m(this).lf();
  };
  protoOf(defer$1).jf = function () {
    return _get_original__l7ku1m(this).jf();
  };
  protoOf(defer$1).pf = function (index) {
    return _get_original__l7ku1m(this).pf(index);
  };
  protoOf(defer$1).of = function (name) {
    return _get_original__l7ku1m(this).of(name);
  };
  protoOf(defer$1).mf = function (index) {
    return _get_original__l7ku1m(this).mf(index);
  };
  protoOf(defer$1).nf = function (index) {
    return _get_original__l7ku1m(this).nf(index);
  };
  protoOf(defer$1).qf = function (index) {
    return _get_original__l7ku1m(this).qf(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.e11_1 = writer;
    this.f11_1 = true;
  }
  protoOf(Composer).g11 = function () {
    this.f11_1 = true;
  };
  protoOf(Composer).h11 = function () {
    return Unit_instance;
  };
  protoOf(Composer).i11 = function () {
    this.f11_1 = false;
  };
  protoOf(Composer).j11 = function () {
    return Unit_instance;
  };
  protoOf(Composer).k11 = function (v) {
    return this.e11_1.l11(v);
  };
  protoOf(Composer).m11 = function (v) {
    return this.e11_1.n11(v);
  };
  protoOf(Composer).o11 = function (v) {
    return this.e11_1.n11(v.toString());
  };
  protoOf(Composer).p11 = function (v) {
    return this.e11_1.n11(v.toString());
  };
  protoOf(Composer).q11 = function (v) {
    return this.e11_1.r11(toLong(v));
  };
  protoOf(Composer).s11 = function (v) {
    return this.e11_1.r11(toLong(v));
  };
  protoOf(Composer).t11 = function (v) {
    return this.e11_1.r11(toLong(v));
  };
  protoOf(Composer).u11 = function (v) {
    return this.e11_1.r11(v);
  };
  protoOf(Composer).v11 = function (v) {
    return this.e11_1.n11(v.toString());
  };
  protoOf(Composer).w11 = function (value) {
    return this.e11_1.x11(value);
  };
  function Composer_0(sb, json) {
    return json.ay_1.oz_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.a12_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).t11 = function (v) {
    if (this.a12_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.w11(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.m11(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).u11 = function (v) {
    if (this.a12_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.w11(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.m11(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).q11 = function (v) {
    if (this.a12_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.w11(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.m11(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).s11 = function (v) {
    if (this.a12_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.w11(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.m11(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.d12_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).w11 = function (value) {
    if (this.d12_1) {
      protoOf(Composer).w11.call(this, value);
    } else {
      protoOf(Composer).m11.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.g12_1 = json;
    this.h12_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).g11 = function () {
    this.f11_1 = true;
    this.h12_1 = this.h12_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).h11 = function () {
    this.h12_1 = this.h12_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).i11 = function () {
    this.f11_1 = false;
    this.m11('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.h12_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.m11(this.g12_1.ay_1.qz_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).j11 = function () {
    this.k11(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.j12_1 = !descriptor.qf(index) ? descriptor.nf(index).df() : false;
    return $this.j12_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.i12_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.j12_1 = false;
  }
  protoOf(JsonElementMarker).jn = function (index) {
    this.i12_1.jn(index);
  };
  protoOf(JsonElementMarker).kn = function () {
    return this.i12_1.kn();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.k12('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, get_specialFlowingValuesHint());
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.hf() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.lf() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    return JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n') + ('Current input: ' + minify(input)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex_0)) + suffix;
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n') + ('Current output: ' + minify(output)));
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.of(name);
    if (!(index === -3))
      return index;
    if (!json.ay_1.vz_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.hf() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.pf(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.lf(), CLASS_getInstance()) ? json.ay_1.wz_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.m12(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.ay_1.xz_1 ? equals(descriptor.lf(), ENUM_getInstance()) : false;
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).s1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.m12(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.jf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_0 = _this__u8e3s4.mf(i);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.p();
        while (tmp0_iterator.q()) {
          var element = tmp0_iterator.r();
          if (element instanceof JsonNames) {
            destination.m(element);
          }
        }
        var tmp1_safe_receiver = singleOrNull(destination);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n12_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp2_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp2_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.pf(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.o12(_this__u8e3s4, i, _this__u8e3s4.pf(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.v()) {
      // Inline function 'kotlinx.serialization.json.internal.buildDeserializationNamesMap.<anonymous>' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.lf(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).q1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.pf(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.pf(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildDeserializationNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.n1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.jf();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.pf(tmp_2);
        tmp_1[tmp_2] = $strategy.o12($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.r12_1, 2);
    $this.p12_1 = copyOf($this.p12_1, newSize);
    $this.q12_1 = copyOf_0($this.q12_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.p12_1 = fillArrayVal(Array(8), null);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.q12_1 = tmp_2;
    this.r12_1 = -1;
  }
  protoOf(JsonPath).s12 = function (sd) {
    this.r12_1 = this.r12_1 + 1 | 0;
    var depth = this.r12_1;
    if (depth === this.p12_1.length) {
      resize(this);
    }
    this.p12_1[depth] = sd;
  };
  protoOf(JsonPath).t12 = function (index) {
    this.q12_1[this.r12_1] = index;
  };
  protoOf(JsonPath).u12 = function (key) {
    var tmp;
    if (!(this.q12_1[this.r12_1] === -2)) {
      this.r12_1 = this.r12_1 + 1 | 0;
      tmp = this.r12_1 === this.p12_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.p12_1[this.r12_1] = key;
    this.q12_1[this.r12_1] = -2;
  };
  protoOf(JsonPath).v12 = function () {
    if (this.q12_1[this.r12_1] === -2) {
      this.p12_1[this.r12_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).w12 = function () {
    var depth = this.r12_1;
    if (this.q12_1[depth] === -2) {
      this.q12_1[depth] = -1;
      this.r12_1 = this.r12_1 - 1 | 0;
    }
    if (!(this.r12_1 === -1)) {
      this.r12_1 = this.r12_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).x12 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    this_0.i4('$');
    // Inline function 'kotlin.repeat' call
    var times = this.r12_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.p12_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.lf(), LIST_getInstance())) {
            if (!(this.q12_1[index] === -1)) {
              this_0.i4('[');
              this_0.h4(this.q12_1[index]);
              this_0.i4(']');
            }
          } else {
            var idx = this.q12_1[index];
            if (idx >= 0) {
              this_0.i4('.');
              this_0.i4(element.pf(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.i4('[');
            this_0.i4("'");
            this_0.h4(element);
            this_0.i4("'");
            this_0.i4(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.x12();
  };
  function encodeByWriter(_this__u8e3s4, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = values().length;
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, _this__u8e3s4, tmp, tmp$ret$0);
    encoder.wi(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.g13_1.j13(get_TC_BEGIN_OBJ());
    if ($this.g13_1.k13() === get_TC_COMMA()) {
      $this.g13_1.k12('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.g13_1.l13()) {
      var key = $this.h13_1 ? $this.g13_1.n13() : $this.g13_1.m13();
      $this.g13_1.j13(get_TC_COLON());
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      var element = $this.o13();
      // Inline function 'kotlin.collections.set' call
      result.n1(key, element);
      lastToken = $this.g13_1.p13();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== get_TC_COMMA())
        if (tmp0_subject === get_TC_END_OBJ())
          break $l$loop;
        else {
          $this.g13_1.k12('Expected end of the object or comma');
        }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.g13_1.j13(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.g13_1.k12('Unexpected trailing comma');
    }
    return new JsonObject(result);
  }
  function readObject_0(_this__u8e3s4, $this, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.d9_1 = Unit_instance;
    tmp.e9_1 = null;
    return tmp.m9();
  }
  function readArray($this) {
    var lastToken = $this.g13_1.p13();
    if ($this.g13_1.k13() === get_TC_COMMA()) {
      $this.g13_1.k12('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.g13_1.l13()) {
      var element = $this.o13();
      result.m(element);
      lastToken = $this.g13_1.p13();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var this_0 = $this.g13_1;
        var condition = lastToken === get_TC_END_LIST();
        var position = this_0.qy_1;
        if (!condition) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          var tmp$ret$1 = 'Expected end of the array or comma';
          this_0.k12(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.g13_1.j13(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.g13_1.k12('Unexpected trailing comma');
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.h13_1 ? true : !isString) {
      tmp = $this.g13_1.n13();
    } else {
      tmp = $this.g13_1.m13();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.m14_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).r14 = function ($this$$receiver, it, $completion) {
    var tmp = this.s14($this$$receiver, it, $completion);
    tmp.d9_1 = Unit_instance;
    tmp.e9_1 = null;
    return tmp.m9();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).cc = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.r14(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).m9 = function () {
    var suspendResult = this.d9_1;
    $sm: do
      try {
        var tmp = this.b9_1;
        switch (tmp) {
          case 0:
            this.c9_1 = 3;
            this.p14_1 = this.m14_1.g13_1.k13();
            if (this.p14_1 === get_TC_STRING()) {
              this.q14_1 = readValue(this.m14_1, true);
              this.b9_1 = 2;
              continue $sm;
            } else {
              if (this.p14_1 === get_TC_OTHER()) {
                this.q14_1 = readValue(this.m14_1, false);
                this.b9_1 = 2;
                continue $sm;
              } else {
                if (this.p14_1 === get_TC_BEGIN_OBJ()) {
                  this.b9_1 = 1;
                  suspendResult = readObject_0(this.n14_1, this.m14_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.p14_1 === get_TC_BEGIN_LIST()) {
                    this.q14_1 = readArray(this.m14_1);
                    this.b9_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.m14_1.g13_1.k12("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.q14_1 = suspendResult;
            this.b9_1 = 2;
            continue $sm;
          case 2:
            return this.q14_1;
          case 3:
            throw this.e9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c9_1 === 3) {
          throw e;
        } else {
          this.b9_1 = this.c9_1;
          this.e9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).s14 = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.m14_1, completion);
    i.n14_1 = $this$$receiver;
    i.o14_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $completion) {
      return i.r14($this$$receiver, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y13_1 = _this__u8e3s4;
    this.z13_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).m9 = function () {
    var suspendResult = this.d9_1;
    $sm: do
      try {
        var tmp = this.b9_1;
        switch (tmp) {
          case 0:
            this.c9_1 = 5;
            var tmp_0 = this;
            tmp_0.a14_1 = this.y13_1;
            this.b14_1 = this.a14_1.g13_1.j13(get_TC_BEGIN_OBJ());
            if (this.a14_1.g13_1.k13() === get_TC_COMMA()) {
              this.a14_1.g13_1.k12('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.c14_1 = LinkedHashMap_init_$Create$();
            this.b9_1 = 1;
            continue $sm;
          case 1:
            if (!this.a14_1.g13_1.l13()) {
              this.b9_1 = 4;
              continue $sm;
            }

            this.d14_1 = this.a14_1.h13_1 ? this.a14_1.g13_1.n13() : this.a14_1.g13_1.m13();
            this.a14_1.g13_1.j13(get_TC_COLON());
            this.b9_1 = 2;
            suspendResult = this.z13_1.ub(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var this_0 = this.c14_1;
            var key = this.d14_1;
            this_0.n1(key, element);
            this.b14_1 = this.a14_1.g13_1.p13();
            var tmp0_subject = this.b14_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.b9_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.b9_1 = 4;
                continue $sm;
              } else {
                this.a14_1.g13_1.k12('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.b9_1 = 1;
            continue $sm;
          case 4:
            if (this.b14_1 === get_TC_BEGIN_OBJ()) {
              this.a14_1.g13_1.j13(get_TC_END_OBJ());
            } else if (this.b14_1 === get_TC_COMMA()) {
              this.a14_1.g13_1.k12('Unexpected trailing comma');
            }

            return new JsonObject(this.c14_1);
          case 5:
            throw this.e9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.c9_1 === 5) {
          throw e;
        } else {
          this.b9_1 = this.c9_1;
          this.e9_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.g13_1 = lexer;
    this.h13_1 = configuration.mz_1;
    this.i13_1 = 0;
  }
  protoOf(JsonTreeReader).o13 = function () {
    var token = this.g13_1.k13();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      this.i13_1 = this.i13_1 + 1 | 0;
      if (this.i13_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.i13_1 = this.i13_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      this.g13_1.k12('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.if().p();
    while (tmp0_iterator.q()) {
      var annotation = tmp0_iterator.r();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.t14_1;
    }
    return json.ay_1.tz_1;
  }
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.yz().ay_1.sz_1;
    }
    if (tmp) {
      return deserializer.fe(_this__u8e3s4);
    }
    var discriminator = classDiscriminator(deserializer.de(), _this__u8e3s4.yz());
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = _this__u8e3s4.zz();
    var descriptor = deserializer.de();
    if (!(value instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + getKClassFromExpression(value));
    }
    var jsonTree = value;
    var tmp0_safe_receiver = jsonTree.c10(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d10();
    var tmp2_elvis_lhs = deserializer.ue(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.yz();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.de()).t(classDiscriminator)) {
      var baseName = serializer.de().hf();
      var actualName = actualSerializer.de().hf();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.lf();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.e5() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.u14_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.e5() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.jf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.pf(i);
        if (name === $this.v14_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.u14_1 = useArrayPolymorphism;
    this.v14_1 = discriminator;
  }
  protoOf(PolymorphismValidator).rx = function (kClass, provider) {
  };
  protoOf(PolymorphismValidator).ux = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.de();
    checkKind_0(this, descriptor, actualClass);
    if (!this.u14_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(PolymorphismValidator).vx = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(PolymorphismValidator).wx = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.l12_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).w14 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.l12_1;
    var value_0 = this_0.s1(descriptor);
    var tmp;
    if (value_0 == null) {
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      var answer = createMapForCache(2);
      this_0.n1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var this_1 = tmp;
    var key_0 = key instanceof Key ? key : THROW_CCE();
    var value_1 = !(value == null) ? value : THROW_CCE();
    this_1.n1(key_0, value_1);
  };
  protoOf(DescriptorSchemaCache).m12 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.x14(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.w14(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).x14 = function (descriptor, key) {
    var tmp0_safe_receiver = this.l12_1.s1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.s1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.y14_1 = discriminatorToSkip;
  }
  function trySkip(_this__u8e3s4, $this, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.y14_1 === unknownKey) {
      _this__u8e3s4.y14_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.vh(descriptor);
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.ky_1.k13() === get_TC_COMMA()) {
      $this.ky_1.k12('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.my_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.my_1 === -1)) {
        hasComma = $this.ky_1.a15();
      }
    } else {
      $this.ky_1.z14(get_COLON());
    }
    var tmp;
    if ($this.ky_1.l13()) {
      if (decodingKey) {
        if ($this.my_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_0 = $this.ky_1;
          var condition = !hasComma;
          var position = this_0.qy_1;
          if (!condition) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$0 = 'Unexpected trailing comma';
            this_0.k12(tmp$ret$0, position);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var this_1 = $this.ky_1;
          var condition_0 = hasComma;
          var position_0 = this_1.qy_1;
          if (!condition_0) {
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            var tmp$ret$1 = 'Expected comma after the key-value pair';
            this_1.k12(tmp$ret$1, position_0);
          }
        }
      }
      $this.my_1 = $this.my_1 + 1 | 0;
      tmp = $this.my_1;
    } else {
      if (hasComma) {
        $this.ky_1.k12("Expected '}', but had ',' instead");
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.iy_1;
      var elementDescriptor = descriptor.nf(index);
      var tmp;
      if (!elementDescriptor.df()) {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp = $this.ky_1.b15(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.lf(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.df()) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          tmp_0 = $this.ky_1.b15(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        var tmp0_elvis_lhs = $this.ky_1.c15($this.oy_1.mz_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.ky_1.m13();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.ky_1.a15();
    while ($this.ky_1.l13()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.ky_1.z14(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.iy_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.oy_1.rz_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.ky_1.a15();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.py_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.jn(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.ky_1.k12('Unexpected trailing comma');
    }
    var tmp1_safe_receiver = $this.py_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kn();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.oy_1.lz_1 ? true : trySkip($this.ny_1, $this, key)) {
      $this.ky_1.e15($this.oy_1.mz_1);
    } else {
      $this.ky_1.d15(key);
    }
    return $this.ky_1.a15();
  }
  function decodeListIndex($this) {
    var hasComma = $this.ky_1.a15();
    var tmp;
    if ($this.ky_1.l13()) {
      if (!($this.my_1 === -1) ? !hasComma : false) {
        $this.ky_1.k12('Expected end of the array or comma');
      }
      $this.my_1 = $this.my_1 + 1 | 0;
      tmp = $this.my_1;
    } else {
      if (hasComma) {
        $this.ky_1.k12('Unexpected trailing comma');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.oy_1.mz_1) {
      tmp = $this.ky_1.g15();
    } else {
      tmp = $this.ky_1.f15();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.iy_1 = json;
    this.jy_1 = mode;
    this.ky_1 = lexer;
    this.ly_1 = this.iy_1.th();
    this.my_1 = -1;
    this.ny_1 = discriminatorHolder;
    this.oy_1 = this.iy_1.ay_1;
    this.py_1 = this.oy_1.pz_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).yz = function () {
    return this.iy_1;
  };
  protoOf(StreamingJsonDecoder).th = function () {
    return this.ly_1;
  };
  protoOf(StreamingJsonDecoder).zz = function () {
    return (new JsonTreeReader(this.iy_1.ay_1, this.ky_1)).o13();
  };
  protoOf(StreamingJsonDecoder).dh = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.iy_1.ay_1.sz_1;
      }
      if (tmp) {
        return deserializer.fe(this);
      }
      var discriminator = classDiscriminator(deserializer.de(), this.iy_1);
      var type = this.ky_1.h15(discriminator, this.oy_1.mz_1);
      var actualSerializer = null;
      if (!(type == null)) {
        actualSerializer = deserializer.ue(this, type);
      }
      if (actualSerializer == null) {
        return decodeSerializableValuePolymorphic(this, isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE());
      }
      this.ny_1 = new DiscriminatorHolder(discriminator);
      var tmp_0 = actualSerializer.fe(this);
      var result = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
      return result;
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.we_1, plus(e.message, ' at path: ') + this.ky_1.ry_1.x12(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).eh = function (descriptor) {
    var newMode = switchMode(this.iy_1, descriptor);
    this.ky_1.ry_1.s12(descriptor);
    this.ky_1.z14(newMode.k15_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a7_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.iy_1, newMode, this.ky_1, descriptor, this.ny_1);
        break;
      default:
        var tmp_0;
        if (this.jy_1.equals(newMode) ? this.iy_1.ay_1.pz_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.iy_1, newMode, this.ky_1, descriptor, this.ny_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).fh = function (descriptor) {
    if (this.iy_1.ay_1.lz_1 ? descriptor.jf() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.ky_1.z14(this.jy_1.l15_1);
    this.ky_1.ry_1.w12();
  };
  protoOf(StreamingJsonDecoder).pg = function () {
    var tmp;
    var tmp0_safe_receiver = this.py_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j12_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.ky_1.m15();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).qg = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).qh = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.jy_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.ky_1.ry_1.v12();
    }
    var value = protoOf(AbstractDecoder).qh.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.ky_1.ry_1.u12(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).vh = function (descriptor) {
    var index;
    switch (this.jy_1.a7_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.jy_1.equals(WriteMode_MAP_getInstance())) {
      this.ky_1.ry_1.t12(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).rg = function () {
    var tmp;
    if (this.oy_1.mz_1) {
      tmp = this.ky_1.o15();
    } else {
      tmp = this.ky_1.n15();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).sg = function () {
    var value = this.ky_1.m10();
    if (!value.equals(toLong(value.r8()))) {
      this.ky_1.k12("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.r8();
  };
  protoOf(StreamingJsonDecoder).tg = function () {
    var value = this.ky_1.m10();
    if (!value.equals(toLong(value.s8()))) {
      this.ky_1.k12("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.s8();
  };
  protoOf(StreamingJsonDecoder).ug = function () {
    var value = this.ky_1.m10();
    if (!value.equals(toLong(value.l7()))) {
      this.ky_1.k12("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.l7();
  };
  protoOf(StreamingJsonDecoder).vg = function () {
    return this.ky_1.m10();
  };
  protoOf(StreamingJsonDecoder).wg = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.ky_1;
      var input = this_0.n13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.k12("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.iy_1.ay_1.uz_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.ky_1, result);
  };
  protoOf(StreamingJsonDecoder).xg = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.ky_1;
      var input = this_0.n13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.k12("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.iy_1.ay_1.uz_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.ky_1, result);
  };
  protoOf(StreamingJsonDecoder).yg = function () {
    var string = this.ky_1.n13();
    if (!(string.length === 1)) {
      this.ky_1.k12("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).zg = function () {
    var tmp;
    if (this.oy_1.mz_1) {
      tmp = this.ky_1.g15();
    } else {
      tmp = this.ky_1.m13();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).bh = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.ky_1, this.iy_1) : protoOf(AbstractDecoder).bh.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).ah = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.iy_1, this.zg(), ' at path ' + this.ky_1.ry_1.x12());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.p15_1 = lexer;
    this.q15_1 = json.th();
  }
  protoOf(JsonDecoderForUnsignedTypes).th = function () {
    return this.q15_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).vh = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).ug = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.p15_1;
      var input = this_0.n13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        // Inline function 'kotlin.UInt.toInt' call
        var this_1 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.k12("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).vg = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.p15_1;
      var input = this_0.n13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        // Inline function 'kotlin.ULong.toLong' call
        var this_1 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.k12("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).sg = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.p15_1;
      var input = this_0.n13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        // Inline function 'kotlin.UByte.toByte' call
        var this_1 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.k12("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).tg = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var this_0 = this.p15_1;
      var input = this_0.n13();
      try {
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        // Inline function 'kotlin.UShort.toShort' call
        var this_1 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_1);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          this_0.k12("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.y12_1.i11();
    $this.ii(ensureNotNull($this.f13_1));
    $this.y12_1.k11(get_COLON());
    $this.y12_1.j11();
    $this.ii(descriptor.hf());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.y12_1 = composer;
    this.z12_1 = json;
    this.a13_1 = mode;
    this.b13_1 = modeReuseCache;
    this.c13_1 = this.z12_1.th();
    this.d13_1 = this.z12_1.ay_1;
    this.e13_1 = false;
    this.f13_1 = null;
    var i = this.a13_1.a7_1;
    if (!(this.b13_1 == null)) {
      if (!(this.b13_1[i] === null) ? true : !(this.b13_1[i] === this)) {
        this.b13_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).yz = function () {
    return this.z12_1;
  };
  protoOf(StreamingJsonEncoder).th = function () {
    return this.c13_1;
  };
  protoOf(StreamingJsonEncoder).bj = function (descriptor, index) {
    return this.d13_1.kz_1;
  };
  protoOf(StreamingJsonEncoder).wi = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.yz().ay_1.sz_1;
      }
      if (tmp) {
        serializer.ee(this, value);
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.de(), this.yz());
      var actualSerializer = findPolymorphicSerializer(casted, this, !(value == null) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.de().lf());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.f13_1 = baseClassDiscriminator;
      actualSerializer.ee(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).eh = function (descriptor) {
    var newMode = switchMode(this.z12_1, descriptor);
    if (!(newMode.k15_1 === get_INVALID())) {
      this.y12_1.k11(newMode.k15_1);
      this.y12_1.g11();
    }
    if (!(this.f13_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.f13_1 = null;
    }
    if (this.a13_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.b13_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.a7_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.y12_1, this.z12_1, newMode, this.b13_1) : tmp1_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).fh = function (descriptor) {
    if (!(this.a13_1.l15_1 === get_INVALID())) {
      this.y12_1.h11();
      this.y12_1.i11();
      this.y12_1.k11(this.a13_1.l15_1);
    }
  };
  protoOf(StreamingJsonEncoder).xh = function (descriptor, index) {
    switch (this.a13_1.a7_1) {
      case 1:
        if (!this.y12_1.f11_1) {
          this.y12_1.k11(get_COMMA());
        }

        this.y12_1.i11();
        break;
      case 2:
        if (!this.y12_1.f11_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.y12_1.k11(get_COMMA());
            this.y12_1.i11();
            tmp_0 = true;
          } else {
            this.y12_1.k11(get_COLON());
            this.y12_1.j11();
            tmp_0 = false;
          }
          tmp.e13_1 = tmp_0;
        } else {
          this.e13_1 = true;
          this.y12_1.i11();
        }

        break;
      case 3:
        if (index === 0)
          this.e13_1 = true;
        if (index === 1) {
          this.y12_1.k11(get_COMMA());
          this.y12_1.j11();
          this.e13_1 = false;
        }

        break;
      default:
        if (!this.y12_1.f11_1) {
          this.y12_1.k11(get_COMMA());
        }

        this.y12_1.i11();
        this.ii(getJsonElementName(descriptor, this.z12_1, index));
        this.y12_1.k11(get_COLON());
        this.y12_1.j11();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).xi = function (descriptor, index, serializer, value) {
    if (!(value == null) ? true : this.d13_1.pz_1) {
      protoOf(AbstractEncoder).xi.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).ki = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.y12_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.y12_1;
      } else {
        tmp_0 = new ComposerForUnsignedNumbers(this.y12_1.e11_1, this.e13_1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.z12_1, this.a13_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.y12_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.y12_1;
      } else {
        tmp_2 = new ComposerForUnquotedLiterals(this.y12_1.e11_1, this.e13_1);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.z12_1, this.a13_1, null);
    } else {
      tmp = protoOf(AbstractEncoder).ki.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).zh = function () {
    this.y12_1.m11(get_NULL());
  };
  protoOf(StreamingJsonEncoder).ai = function (value) {
    if (this.e13_1) {
      this.ii(value.toString());
    } else {
      this.y12_1.v11(value);
    }
  };
  protoOf(StreamingJsonEncoder).bi = function (value) {
    if (this.e13_1) {
      this.ii(value.toString());
    } else {
      this.y12_1.q11(value);
    }
  };
  protoOf(StreamingJsonEncoder).ci = function (value) {
    if (this.e13_1) {
      this.ii(value.toString());
    } else {
      this.y12_1.s11(value);
    }
  };
  protoOf(StreamingJsonEncoder).di = function (value) {
    if (this.e13_1) {
      this.ii(value.toString());
    } else {
      this.y12_1.t11(value);
    }
  };
  protoOf(StreamingJsonEncoder).ei = function (value) {
    if (this.e13_1) {
      this.ii(value.toString());
    } else {
      this.y12_1.u11(value);
    }
  };
  protoOf(StreamingJsonEncoder).fi = function (value) {
    if (this.e13_1) {
      this.ii(value.toString());
    } else {
      this.y12_1.o11(value);
    }
    if (!this.d13_1.uz_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.y12_1.e11_1));
    }
  };
  protoOf(StreamingJsonEncoder).gi = function (value) {
    if (this.e13_1) {
      this.ii(value.toString());
    } else {
      this.y12_1.p11(value);
    }
    if (!this.d13_1.uz_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, toString(this.y12_1.e11_1));
    }
  };
  protoOf(StreamingJsonEncoder).hi = function (value) {
    this.ii(toString_0(value));
  };
  protoOf(StreamingJsonEncoder).ii = function (value) {
    return this.y12_1.w11(value);
  };
  protoOf(StreamingJsonEncoder).ji = function (enumDescriptor, index) {
    this.ii(enumDescriptor.pf(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.kf() ? get_unsignedNumberDescriptors().t(_this__u8e3s4) : false;
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.kf() ? equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor()) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).de(), serializer_0(Companion_getInstance()).de(), serializer_2(Companion_getInstance_1()).de(), serializer_3(Companion_getInstance_2()).de()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.j4(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.o6(value, lastPos, i);
          _this__u8e3s4.i4(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.o6(value, lastPos, value.length);
    } else {
      _this__u8e3s4.i4(value);
    }
    _this__u8e3s4.j4(get_STRING());
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.arrayOfNulls' call
      var this_0 = fillArrayVal(Array(93), null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_0(c1) + toString_0(c2) + toString_0(c3) + toString_0(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      this_7[Char__toInt_impl_vasixd(this_8)] = 34;
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(92);
      this_7[Char__toInt_impl_vasixd(this_9)] = 92;
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(9);
      this_7[Char__toInt_impl_vasixd(this_10)] = 116;
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(8);
      this_7[Char__toInt_impl_vasixd(this_11)] = 98;
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(10);
      this_7[Char__toInt_impl_vasixd(this_12)] = 110;
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(13);
      this_7[Char__toInt_impl_vasixd(this_13)] = 114;
      this_7[12] = 102;
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse literal as '" + primitive + "' value", toString($this.w15()));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' literal when non-nullable " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.t15_1 = json;
    this.u15_1 = value;
    this.v15_1 = this.yz().ay_1;
  }
  protoOf(AbstractJsonTreeDecoder).yz = function () {
    return this.t15_1;
  };
  protoOf(AbstractJsonTreeDecoder).l3 = function () {
    return this.u15_1;
  };
  protoOf(AbstractJsonTreeDecoder).th = function () {
    return this.yz().th();
  };
  protoOf(AbstractJsonTreeDecoder).w15 = function () {
    var tmp0_safe_receiver = this.jv();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp = this.x15(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.l3() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).zz = function () {
    return this.w15();
  };
  protoOf(AbstractJsonTreeDecoder).dh = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  protoOf(AbstractJsonTreeDecoder).kv = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).eh = function (descriptor) {
    var currentObject = this.w15();
    var tmp0_subject = descriptor.lf();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.yz();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + getKClassFromExpression(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.yz();
        var keyDescriptor = carrierDescriptor(descriptor.nf(0), this_0.th());
        var keyKind = keyDescriptor.lf();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.yz();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + getKClassFromExpression(currentObject));
          }
          tmp_2 = new JsonTreeMapDecoder(tmp_4, currentObject);
        } else {
          if (this_0.ay_1.nz_1) {
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.yz();
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + getKClassFromExpression(currentObject));
            }
            tmp_2 = new JsonTreeListDecoder(tmp_5, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_2;
      } else {
        var tmp_6 = this.yz();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.hf() + ', but had ' + getKClassFromExpression(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_6, currentObject);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).fh = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).pg = function () {
    var tmp = this.w15();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).y15 = function (tag) {
    var currentElement = this.x15(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(this.w15()));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).z15 = function (tag, enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.yz(), this.y15(tag).d10());
  };
  protoOf(AbstractJsonTreeDecoder).wv = function (tag, enumDescriptor) {
    return this.z15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).a16 = function (tag) {
    return !(this.x15(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).mv = function (tag) {
    return this.a16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b16 = function (tag) {
    var value = this.y15(tag);
    if (!this.yz().ay_1.mz_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.j10_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(this.w15()));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp0_elvis_lhs_0 = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).nv = function (tag) {
    return this.b16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.y15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ByteCompanionObject_instance.MIN_VALUE;
        if (result <= ByteCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).ov = function (tag) {
    return this.c16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.y15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(this_0);
        var tmp;
        var containsLower = ShortCompanionObject_instance.MIN_VALUE;
        if (result <= ShortCompanionObject_instance.MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        var tmp0_elvis_lhs = tmp;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).pv = function (tag) {
    return this.d16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.y15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        var tmp0_elvis_lhs = get_int(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).qv = function (tag) {
    return this.e16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.y15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        var tmp0_elvis_lhs = get_long(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).rv = function (tag) {
    return this.f16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.y15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        var tmp0_elvis_lhs = get_float(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.yz().ay_1.uz_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.w15()));
  };
  protoOf(AbstractJsonTreeDecoder).sv = function (tag) {
    return this.g16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.y15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        var tmp0_elvis_lhs = get_double(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.yz().ay_1.uz_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.w15()));
  };
  protoOf(AbstractJsonTreeDecoder).tv = function (tag) {
    return this.h16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i16 = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var this_0 = this.y15(tag);
      try {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        var tmp0_elvis_lhs = single(this_0.d10());
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  protoOf(AbstractJsonTreeDecoder).uv = function (tag) {
    return this.i16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j16 = function (tag) {
    var value = this.y15(tag);
    if (!this.yz().ay_1.mz_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.j10_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(this.w15()));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(this.w15()));
    return value.d10();
  };
  protoOf(AbstractJsonTreeDecoder).vv = function (tag) {
    return this.j16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k16 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.y15(tag).d10()), this.yz()) : protoOf(NamedValueDecoder).xv.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).xv = function (tag, inlineDescriptor) {
    return this.k16((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).bh = function (descriptor) {
    return !(this.jv() == null) ? protoOf(NamedValueDecoder).bh.call(this, descriptor) : (new JsonPrimitiveDecoder(this.yz(), this.l3())).bh(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var this_0 = $this.yz();
      var elementDescriptor = descriptor.nf(index);
      var tmp;
      if (!elementDescriptor.df()) {
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.x15(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.lf(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.df()) {
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
          var tmp_2 = $this.x15(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_3 = $this.x15(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, this_0, enumValue);
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.u16_1 = (!$this.yz().ay_1.pz_1 ? !descriptor.qf(index) : false) ? descriptor.nf(index).df() : false;
    return $this.u16_1;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    polyDiscriminator = polyDiscriminator === VOID ? null : polyDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.q16_1 = value;
    this.r16_1 = polyDiscriminator;
    this.s16_1 = polyDescriptor;
    this.t16_1 = 0;
    this.u16_1 = false;
  }
  protoOf(JsonTreeDecoder).l3 = function () {
    return this.q16_1;
  };
  protoOf(JsonTreeDecoder).vh = function (descriptor) {
    while (this.t16_1 < descriptor.jf()) {
      var tmp1 = this.t16_1;
      this.t16_1 = tmp1 + 1 | 0;
      var name = this.ev(descriptor, tmp1);
      var index = this.t16_1 - 1 | 0;
      this.u16_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.l3();
      if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).q1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.v15_1.rz_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).pg = function () {
    return !this.u16_1 ? protoOf(AbstractJsonTreeDecoder).pg.call(this) : false;
  };
  protoOf(JsonTreeDecoder).fv = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.yz());
    var baseName = descriptor.pf(index);
    if (strategy == null) {
      if (!this.v15_1.vz_1)
        return baseName;
      if (this.l3().m1().t(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.yz(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var this_0 = this.l3().m1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.p();
      while (tmp0_iterator.q()) {
        var element = tmp0_iterator.r();
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        if (deserializationNamesMap_0.s1(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.o12(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).x15 = function (tag) {
    return getValue(this.l3(), tag);
  };
  protoOf(JsonTreeDecoder).eh = function (descriptor) {
    if (descriptor === this.s16_1) {
      var tmp = this.yz();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.w15();
      var descriptor_0 = this.s16_1;
      if (!(value instanceof JsonObject)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor_0.hf() + ', but had ' + getKClassFromExpression(value));
      }
      return new JsonTreeDecoder(tmp, value, this.r16_1, this.s16_1);
    }
    return protoOf(AbstractJsonTreeDecoder).eh.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).fh = function (descriptor) {
    var tmp;
    if (this.v15_1.lz_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.lf();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.yz());
    var tmp_1;
    if (strategy == null ? !this.v15_1.vz_1 : false) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.yz(), descriptor).m1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.yz()).x14(descriptor, get_JsonDeserializationNamesKey());
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.l3().m1().p();
    while (tmp1_iterator.q()) {
      var key = tmp1_iterator.r();
      if (!names.t(key) ? !(key === this.r16_1) : false) {
        throw UnknownKeyException(key, this.l3().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.a17_1 = value;
    this.b17_1 = this.a17_1.s();
    this.c17_1 = -1;
  }
  protoOf(JsonTreeListDecoder).l3 = function () {
    return this.a17_1;
  };
  protoOf(JsonTreeListDecoder).fv = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).x15 = function (tag) {
    return this.a17_1.z(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).vh = function (descriptor) {
    while (this.c17_1 < (this.b17_1 - 1 | 0)) {
      this.c17_1 = this.c17_1 + 1 | 0;
      return this.c17_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.i17_1 = value;
    this.yv(get_PRIMITIVE_TAG());
  }
  protoOf(JsonPrimitiveDecoder).l3 = function () {
    return this.i17_1;
  };
  protoOf(JsonPrimitiveDecoder).vh = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).x15 = function (tag) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(tag === get_PRIMITIVE_TAG())) {
      // Inline function 'kotlinx.serialization.json.internal.JsonPrimitiveDecoder.currentElement.<anonymous>' call
      var message = "This input can only handle primitives with '" + get_PRIMITIVE_TAG() + "' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.i17_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.t17_1 = value;
    this.u17_1 = toList(this.t17_1.m1());
    this.v17_1 = imul(this.u17_1.s(), 2);
    this.w17_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).l3 = function () {
    return this.t17_1;
  };
  protoOf(JsonTreeMapDecoder).fv = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.u17_1.z(i);
  };
  protoOf(JsonTreeMapDecoder).vh = function (descriptor) {
    while (this.w17_1 < (this.v17_1 - 1 | 0)) {
      this.w17_1 = this.w17_1 + 1 | 0;
      return this.w17_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).x15 = function (tag) {
    return (this.w17_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.t17_1, tag);
  };
  protoOf(JsonTreeMapDecoder).fh = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.de())).dh(deserializer);
  }
  function get_PRIMITIVE_TAG() {
    return PRIMITIVE_TAG;
  }
  var PRIMITIVE_TAG;
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.k15_1 = begin;
    this.l15_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.lf();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.nf(0), _this__u8e3s4.th());
          var keyKind = keyDescriptor.lf();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.ay_1.nz_1) {
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.lf(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.kf()) {
      tmp = carrierDescriptor(_this__u8e3s4.nf(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.x17(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.x17(lastPosition, currentPosition);
    var result = $this.ty_1.toString();
    $this.ty_1.t6(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.sy_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.sy_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.y17(), $this.qy_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.z17(currentPosition);
    if (currentPosition === -1) {
      $this.k12('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.y17();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.y17(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.k12("Invalid escaped char '" + toString_0(currentChar) + "'");
    }
    $this.ty_1.j4(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.qy_1 = startPos;
      $this.a18();
      if (($this.qy_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.k12('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.qy_1);
    }
    $this.ty_1.j4(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.k12("Invalid toHexChar char '" + toString_0(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.z17(start);
    if (current >= charSequenceLength($this.y17()) ? true : current === -1) {
      $this.k12('EOF');
    }
    // Inline function 'kotlin.code' call
    var tmp = $this.y17();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var this_0 = charSequenceGet(tmp, tmp0);
    var tmp1_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp1_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp1_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.k12("Expected valid boolean literal prefix, but had '" + $this.n13() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.y17()) - current | 0) < literalSuffix.length) {
      $this.k12('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.y17(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.k12("Expected valid boolean literal prefix, but had '" + $this.n13() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.qy_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.b5();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.b5();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.qy_1 = 0;
    this.ry_1 = new JsonPath();
    this.sy_1 = null;
    this.ty_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).a18 = function () {
  };
  protoOf(AbstractJsonLexer).b18 = function (c) {
    return (((c === _Char___init__impl__6a9atx(125) ? true : c === _Char___init__impl__6a9atx(93)) ? true : c === _Char___init__impl__6a9atx(58)) ? true : c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).uy = function () {
    var nextToken = this.p13();
    if (!(nextToken === 10)) {
      this.k12('Expected EOF after parsing, but had ' + toString_0(charSequenceGet(this.y17(), this.qy_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).j13 = function (expected) {
    var token = this.p13();
    if (!(token === expected)) {
      this.c18(expected);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).z14 = function (expected) {
    this.a18();
    var source = this.y17();
    var cpos = this.qy_1;
    $l$loop_0: while (true) {
      cpos = this.z17(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop_0;
      this.qy_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.d18(expected);
    }
    this.qy_1 = cpos;
    this.d18(expected);
  };
  protoOf(AbstractJsonLexer).d18 = function (expected) {
    if (this.qy_1 > 0 ? expected === _Char___init__impl__6a9atx(34) : false) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.qy_1;
        try {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.unexpectedToken.<anonymous>' call
          this.qy_1 = this.qy_1 - 1 | 0;
          tmp$ret$1 = this.n13();
          break $l$block;
        }finally {
          this.qy_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.e18("Expected string literal but 'null' literal was found", this.qy_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls to default values.");
      }
    }
    this.c18(charToTokenClass(expected));
  };
  protoOf(AbstractJsonLexer).f18 = function (expectedToken, wasConsumed) {
    var expected = tokenDescription(expectedToken);
    var position = wasConsumed ? this.qy_1 - 1 | 0 : this.qy_1;
    var s = (this.qy_1 === charSequenceLength(this.y17()) ? true : position < 0) ? 'EOF' : toString_0(charSequenceGet(this.y17(), position));
    this.k12('Expected ' + expected + ", but had '" + s + "' instead", position);
  };
  protoOf(AbstractJsonLexer).c18 = function (expectedToken, wasConsumed, $super) {
    wasConsumed = wasConsumed === VOID ? true : wasConsumed;
    return $super === VOID ? this.f18(expectedToken, wasConsumed) : $super.f18.call(this, expectedToken, wasConsumed);
  };
  protoOf(AbstractJsonLexer).k13 = function () {
    var source = this.y17();
    var cpos = this.qy_1;
    $l$loop_0: while (true) {
      cpos = this.z17(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((ch === _Char___init__impl__6a9atx(32) ? true : ch === _Char___init__impl__6a9atx(10)) ? true : ch === _Char___init__impl__6a9atx(13)) ? true : ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.qy_1 = cpos;
      return charToTokenClass(ch);
    }
    this.qy_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).b15 = function (doConsume) {
    var current = this.g18();
    current = this.z17(current);
    var len = charSequenceLength(this.y17()) - current | 0;
    if (len < 4 ? true : current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.y17(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.y17(), current + 4 | 0)) === 0 : false)
      return false;
    if (doConsume) {
      this.qy_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).m15 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.b15(doConsume) : $super.b15.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).g18 = function () {
    var current = this.qy_1;
    $l$loop_0: while (true) {
      current = this.z17(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.y17(), current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.qy_1 = current;
    return current;
  };
  protoOf(AbstractJsonLexer).c15 = function (isLenient) {
    var token = this.k13();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.n13();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.m13();
    }
    var string = tmp;
    this.sy_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).h18 = function () {
    this.sy_1 = null;
  };
  protoOf(AbstractJsonLexer).i18 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.y17();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).m13 = function () {
    if (!(this.sy_1 == null)) {
      return takePeeked(this);
    }
    return this.f15();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.z17(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.k12('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.x17(lastPosition, currentPosition);
          currentPosition = this.z17(currentPosition);
          if (currentPosition === -1) {
            this.k12('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.i18(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.qy_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).g15 = function () {
    var result = this.n13();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.k12("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).n13 = function () {
    if (!(this.sy_1 == null)) {
      return takePeeked(this);
    }
    var current = this.g18();
    if (current >= charSequenceLength(this.y17()) ? true : current === -1) {
      this.k12('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.y17(), current));
    if (token === 1) {
      return this.m13();
    }
    if (!(token === 0)) {
      this.k12('Expected beginning of the string, but got ' + toString_0(charSequenceGet(this.y17(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.y17(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.y17())) {
        usedAppend = true;
        this.x17(this.qy_1, current);
        var eof = this.z17(current);
        if (eof === -1) {
          this.qy_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.i18(this.qy_1, current);
    } else {
      tmp = decodedString(this, this.qy_1, current);
    }
    var result = tmp;
    this.qy_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).x17 = function (fromIndex, toIndex) {
    this.ty_1.o6(this.y17(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).e15 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.k13();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.n13();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.k13();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.n13();
        } else {
          this.f15();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.m(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.qy_1, 'found ] instead of } at path: ' + this.ry_1, this.y17());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.qy_1, 'found } instead of ] at path: ' + this.ry_1, this.y17());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.k12('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.p13();
      if (tokenStack.s() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + this.y17() + "', currentPosition=" + this.qy_1 + ')';
  };
  protoOf(AbstractJsonLexer).d15 = function (key) {
    var processed = this.i18(0, this.qy_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.e18("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).e18 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.ry_1.x12() + hintMessage, this.y17());
  };
  protoOf(AbstractJsonLexer).k12 = function (message, position, hint, $super) {
    position = position === VOID ? this.qy_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.e18(message, position, hint) : $super.e18.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).m10 = function () {
    var current = this.g18();
    current = this.z17(current);
    if (current >= charSequenceLength(this.y17()) ? true : current === -1) {
      this.k12('EOF');
    }
    var tmp;
    if (charSequenceGet(this.y17(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.y17())) {
        this.k12('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.y17()))) {
      var ch = charSequenceGet(this.y17(), current);
      if ((ch === _Char___init__impl__6a9atx(101) ? true : ch === _Char___init__impl__6a9atx(69)) ? !hasExponent : false) {
        if (current === start) {
          this.k12('Unexpected symbol ' + toString_0(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) ? hasExponent : false) {
        if (current === start) {
          this.k12("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) ? hasExponent : false) {
        if (current === start) {
          this.k12("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.k12("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.k12("Unexpected symbol '" + toString_0(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.plus' call
        // Inline function 'kotlin.Long.times' call
        exponentAccumulator = exponentAccumulator.d7(toLong(10)).g8(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.Long.times' call
      accumulator = accumulator.d7(toLong(10)).h8(toLong(digit));
      if (accumulator.e7(new Long(0, 0)) > 0) {
        this.k12('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.k12('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.k12('EOF');
      }
      if (!(charSequenceGet(this.y17(), current) === _Char___init__impl__6a9atx(34))) {
        this.k12('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.qy_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.b5() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      var tmp_0;
      Companion_getInstance_3();
      if (doubleAccumulator > (new Long(-1, 2147483647)).b5()) {
        tmp_0 = true;
      } else {
        Companion_getInstance_3();
        tmp_0 = doubleAccumulator < (new Long(0, -2147483648)).b5();
      }
      if (tmp_0) {
        this.k12('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.k12("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_3();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.j8();
      } else {
        this.k12('Numeric value overflow');
      }
    }
    return tmp_1;
  };
  protoOf(AbstractJsonLexer).n15 = function () {
    return consumeBoolean(this, this.g18());
  };
  protoOf(AbstractJsonLexer).o15 = function () {
    var current = this.g18();
    if (current === charSequenceLength(this.y17())) {
      this.k12('EOF');
    }
    var tmp;
    if (charSequenceGet(this.y17(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.qy_1 === charSequenceLength(this.y17())) {
        this.k12('EOF');
      }
      if (!(charSequenceGet(this.y17(), this.qy_1) === _Char___init__impl__6a9atx(34))) {
        this.k12('Expected closing quotation mark');
      }
      this.qy_1 = this.qy_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().k18_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().j18_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.j18_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.k18_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.j18_1 = charArray(117);
    this.k18_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.p18_1 = source;
  }
  protoOf(StringJsonLexer).y17 = function () {
    return this.p18_1;
  };
  protoOf(StringJsonLexer).z17 = function (position) {
    return position < this.p18_1.length ? position : -1;
  };
  protoOf(StringJsonLexer).p13 = function () {
    var source = this.p18_1;
    $l$loop: while (!(this.qy_1 === -1) ? this.qy_1 < source.length : false) {
      var tmp1 = this.qy_1;
      this.qy_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  protoOf(StringJsonLexer).a15 = function () {
    var current = this.g18();
    if (current === this.p18_1.length ? true : current === -1)
      return false;
    if (charSequenceGet(this.p18_1, current) === _Char___init__impl__6a9atx(44)) {
      this.qy_1 = this.qy_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(StringJsonLexer).l13 = function () {
    var current = this.qy_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.p18_1.length) {
      var c = charSequenceGet(this.p18_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.qy_1 = current;
      return this.b18(c);
    }
    this.qy_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).g18 = function () {
    var current = this.qy_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.p18_1.length) {
      var c = charSequenceGet(this.p18_1, current);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.qy_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).z14 = function (expected) {
    if (this.qy_1 === -1) {
      this.d18(expected);
    }
    var source = this.p18_1;
    $l$loop: while (this.qy_1 < source.length) {
      var tmp1 = this.qy_1;
      this.qy_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((c === _Char___init__impl__6a9atx(32) ? true : c === _Char___init__impl__6a9atx(10)) ? true : c === _Char___init__impl__6a9atx(13)) ? true : c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      if (c === expected)
        return Unit_instance;
      this.d18(expected);
    }
    this.qy_1 = -1;
    this.d18(expected);
  };
  protoOf(StringJsonLexer).f15 = function () {
    this.z14(get_STRING());
    var current = this.qy_1;
    var closingQuote = indexOf(this.p18_1, _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.n13();
      this.f18(get_TC_STRING(), false);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.p18_1, i) === get_STRING_ESC()) {
          return this.consumeString2(this.p18_1, this.qy_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.qy_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.p18_1.substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).h15 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.qy_1;
    try {
      if (!(this.p13() === get_TC_BEGIN_OBJ()))
        return null;
      var firstKey = this.c15(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.h18();
      if (!(this.p13() === get_TC_COLON()))
        return null;
      return this.c15(isLenient);
    }finally {
      this.qy_1 = positionSnapshot;
      this.h18();
    }
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.cy_1;
  }
  function JsonToStringWriter() {
    this.gy_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).r11 = function (value) {
    this.gy_1.h4(value);
  };
  protoOf(JsonToStringWriter).l11 = function (char) {
    this.gy_1.j4(char);
  };
  protoOf(JsonToStringWriter).n11 = function (text) {
    this.gy_1.i4(text);
  };
  protoOf(JsonToStringWriter).x11 = function (text) {
    printQuoted(this.gy_1, text);
  };
  protoOf(JsonToStringWriter).hy = function () {
    this.gy_1.u6();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.gy_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).df = get_isNullable;
  protoOf(defer$1).kf = get_isInline;
  protoOf(defer$1).if = get_annotations;
  protoOf(PolymorphismValidator).tx = contextual;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Tombstone_instance = new Tombstone();
  PRIMITIVE_TAG = 'primitive';
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_BEGIN_OBJ = 6;
  TC_COLON = 5;
  TC_COMMA = 4;
  COLON = _Char___init__impl__6a9atx(58);
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  lenientHint = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  TC_OTHER = 0;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_END_OBJ = 7;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonElementSerializer_getInstance;
  _.$_$.b = Json_0;
  _.$_$.c = get_jsonObject;
  _.$_$.d = get_jsonPrimitive;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
