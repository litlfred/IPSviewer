(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.h7;
  var interfaceMeta = kotlin_kotlin.$_$.n6;
  var setMetadataFor = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.e;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.e3;
  var Unit_instance = kotlin_kotlin.$_$.o3;
  var emptyList = kotlin_kotlin.$_$.r4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.w9;
  var classMeta = kotlin_kotlin.$_$.g6;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.u7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k6;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.w;
  var objectCreate = kotlin_kotlin.$_$.f7;
  var captureStack = kotlin_kotlin.$_$.a6;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.y;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.a1;
  var IllegalArgumentException = kotlin_kotlin.$_$.z8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.d4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var KClass = kotlin_kotlin.$_$.t7;
  var isInterface = kotlin_kotlin.$_$.w6;
  var Triple = kotlin_kotlin.$_$.f9;
  var getKClass = kotlin_kotlin.$_$.d;
  var Pair = kotlin_kotlin.$_$.b9;
  var Entry = kotlin_kotlin.$_$.w3;
  var LinkedHashMap = kotlin_kotlin.$_$.t3;
  var MutableMap = kotlin_kotlin.$_$.z3;
  var Map = kotlin_kotlin.$_$.x3;
  var HashMap = kotlin_kotlin.$_$.r3;
  var LinkedHashSet = kotlin_kotlin.$_$.u3;
  var MutableSet = kotlin_kotlin.$_$.a4;
  var Set = kotlin_kotlin.$_$.b4;
  var HashSet = kotlin_kotlin.$_$.s3;
  var ArrayList = kotlin_kotlin.$_$.p3;
  var MutableList = kotlin_kotlin.$_$.y3;
  var List = kotlin_kotlin.$_$.v3;
  var Collection = kotlin_kotlin.$_$.q3;
  var copyToArray = kotlin_kotlin.$_$.q4;
  var toString = kotlin_kotlin.$_$.m7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.z;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.n1;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.m1;
  var Result = kotlin_kotlin.$_$.c9;
  var ensureNotNull = kotlin_kotlin.$_$.s9;
  var equals = kotlin_kotlin.$_$.h6;
  var getStringHashCode = kotlin_kotlin.$_$.l6;
  var isBlank = kotlin_kotlin.$_$.z7;
  var toList = kotlin_kotlin.$_$.s5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var toHashSet = kotlin_kotlin.$_$.q5;
  var toBooleanArray = kotlin_kotlin.$_$.p5;
  var withIndex = kotlin_kotlin.$_$.u5;
  var to = kotlin_kotlin.$_$.aa;
  var toMap = kotlin_kotlin.$_$.t5;
  var lazy_0 = kotlin_kotlin.$_$.x9;
  var contentEquals = kotlin_kotlin.$_$.e4;
  var until = kotlin_kotlin.$_$.s7;
  var joinToString = kotlin_kotlin.$_$.b5;
  var objectMeta = kotlin_kotlin.$_$.g7;
  var Long = kotlin_kotlin.$_$.a9;
  var Char = kotlin_kotlin.$_$.u8;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.g1;
  var Duration = kotlin_kotlin.$_$.t8;
  var Companion_getInstance = kotlin_kotlin.$_$.g3;
  var toIntOrNull = kotlin_kotlin.$_$.j8;
  var hashCode = kotlin_kotlin.$_$.m6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.i;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.r;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var isArray = kotlin_kotlin.$_$.o6;
  var arrayIterator = kotlin_kotlin.$_$.y5;
  var asList = kotlin_kotlin.$_$.c4;
  var step = kotlin_kotlin.$_$.r7;
  var getValue = kotlin_kotlin.$_$.x4;
  var longArray = kotlin_kotlin.$_$.a7;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.i3;
  var get_lastIndex = kotlin_kotlin.$_$.c5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.q9;
  var indexOf = kotlin_kotlin.$_$.y4;
  var contentToString = kotlin_kotlin.$_$.g4;
  var Enum = kotlin_kotlin.$_$.x8;
  var fillArrayVal = kotlin_kotlin.$_$.i6;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.m;
  var KTypeParameter = kotlin_kotlin.$_$.v7;
  var booleanArray = kotlin_kotlin.$_$.z5;
  var emptyMap = kotlin_kotlin.$_$.s4;
  var contentHashCode = kotlin_kotlin.$_$.f4;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.h3;
  var isCharArray = kotlin_kotlin.$_$.r6;
  var charArray = kotlin_kotlin.$_$.c6;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.a3;
  var isDoubleArray = kotlin_kotlin.$_$.t6;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.b3;
  var isFloatArray = kotlin_kotlin.$_$.u6;
  var isLongArray = kotlin_kotlin.$_$.x6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.m3;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.n2;
  var ULongArray = kotlin_kotlin.$_$.k9;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.j2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.g2;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.l2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.h2;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.c3;
  var isIntArray = kotlin_kotlin.$_$.v6;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.l3;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.e2;
  var UIntArray = kotlin_kotlin.$_$.i9;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.a2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.x1;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.c2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.d3;
  var isShortArray = kotlin_kotlin.$_$.y6;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.n3;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.w2;
  var UShortArray = kotlin_kotlin.$_$.m9;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.s2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.p2;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.u2;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.q2;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.z2;
  var isByteArray = kotlin_kotlin.$_$.q6;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.k3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.v1;
  var UByteArray = kotlin_kotlin.$_$.g9;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.s1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.o1;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.t1;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.p1;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.y2;
  var isBooleanArray = kotlin_kotlin.$_$.p6;
  var coerceAtLeast = kotlin_kotlin.$_$.o7;
  var copyOf = kotlin_kotlin.$_$.k4;
  var copyOf_0 = kotlin_kotlin.$_$.m4;
  var copyOf_1 = kotlin_kotlin.$_$.n4;
  var copyOf_2 = kotlin_kotlin.$_$.i4;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.o2;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.k2;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.m2;
  var copyOf_3 = kotlin_kotlin.$_$.p4;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.f2;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.b2;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.d2;
  var copyOf_4 = kotlin_kotlin.$_$.h4;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.x2;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.t2;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.v2;
  var copyOf_5 = kotlin_kotlin.$_$.l4;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.w1;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.r1;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.u1;
  var copyOf_6 = kotlin_kotlin.$_$.j4;
  var Unit = kotlin_kotlin.$_$.o9;
  var trimIndent = kotlin_kotlin.$_$.r8;
  var equals_0 = kotlin_kotlin.$_$.x7;
  var charSequenceLength = kotlin_kotlin.$_$.e6;
  var charSequenceGet = kotlin_kotlin.$_$.d6;
  var toString_0 = kotlin_kotlin.$_$.k1;
  var titlecase = kotlin_kotlin.$_$.f8;
  var isLowerCase = kotlin_kotlin.$_$.a8;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f3;
  var ULong = kotlin_kotlin.$_$.l9;
  var UInt = kotlin_kotlin.$_$.j9;
  var UShort = kotlin_kotlin.$_$.n9;
  var UByte = kotlin_kotlin.$_$.h9;
  var mapOf = kotlin_kotlin.$_$.k5;
  var lastOrNull = kotlin_kotlin.$_$.e5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.d5;
  var get_js = kotlin_kotlin.$_$.z6;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.a5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var get_indices_0 = kotlin_kotlin.$_$.z4;
  var Companion_instance = kotlin_kotlin.$_$.j3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l1;
  var createFailure = kotlin_kotlin.$_$.r9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, VOID, [SerializationStrategy, DeserializationStrategy]);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, VOID, SerializationException_init_$Create$);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(elementNames$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.fe(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.qh(descriptor, index, deserializer, previousValue) : $super.qh.call(this, descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.eh(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.ee(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.de().df();
    if (isNullabilitySupported) {
      return this.wi(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.zh();
    } else {
      this.zi();
      this.wi(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, VOID, [Encoder, CompositeEncoder]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta);
  setMetadataFor(EnumSerializer, 'EnumSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(EnumDescriptor, 'EnumDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ULongArrayBuilder, 'ULongArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UIntArrayBuilder, 'UIntArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UShortArrayBuilder, 'UShortArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(UByteArrayBuilder, 'UByteArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, VOID, [Decoder, CompositeDecoder]);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, VOID, [Entry]);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.rx(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  setMetadataFor(createCache$1, VOID, classMeta);
  setMetadataFor(createParametrizedCache$1, VOID, classMeta);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.oe('type', serializer_0(StringCompanionObject_instance).de());
      $this$buildSerialDescriptor.oe('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.pe_1.e5() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.ie_1 = this$0.qe_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.pe_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.pe_1 = baseClass;
    this.qe_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.re_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).se = function () {
    return this.pe_1;
  };
  protoOf(PolymorphicSerializer).de = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.re_1;
    descriptor$factory();
    return this_0.l3();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.pe_1 + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ve(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.se());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.ue(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.se());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.de();
    }, null);
  }
  function SealedClassSerializer() {
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.s() === 1 ? "Field '" + missingFields.z(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.we_1 = missingFields;
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.p();
      while (tmp0_iterator.q()) {
        var item = tmp0_iterator.r();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp$ret$0 = serializer(_this__u8e3s4, item);
        destination.m(tmp$ret$0);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.p();
      while (tmp0_iterator_0.q()) {
        var item_0 = tmp0_iterator_0.r();
        // Inline function 'kotlinx.serialization.serializersForParameters.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$3 = tmp_0;
        destination_0.m(tmp$ret$3);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (((_this__u8e3s4.equals(getKClass(Collection)) ? true : _this__u8e3s4.equals(getKClass(List))) ? true : _this__u8e3s4.equals(getKClass(MutableList))) ? true : _this__u8e3s4.equals(getKClass(ArrayList))) {
      tmp = new ArrayListSerializer(serializers.z(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.z(0));
    } else if ((_this__u8e3s4.equals(getKClass(Set)) ? true : _this__u8e3s4.equals(getKClass(MutableSet))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashSet))) {
      tmp = new LinkedHashSetSerializer(serializers.z(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.z(0), serializers.z(1));
    } else if ((_this__u8e3s4.equals(getKClass(Map)) ? true : _this__u8e3s4.equals(getKClass(MutableMap))) ? true : _this__u8e3s4.equals(getKClass(LinkedHashMap))) {
      tmp = new LinkedHashMapSerializer(serializers.z(0), serializers.z(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.z(0), serializers.z(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.z(0), serializers.z(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.z(0), serializers.z(1), serializers.z(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.z(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.s5();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.r5();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var value = item.ye_1;
        // Inline function 'kotlin.contracts.contract' call
        if (value == null) {
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          var message = 'Star projections in type arguments are not allowed, but had ' + type;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = value;
          break $l$block;
        }
      }
      var tmp$ret$2 = tmp$ret$1;
      destination.m(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.v()) {
      tmp = findCachedSerializer(rootClass, isNullable);
    } else {
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
      var tmp_0;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_0 = null;
      } else {
        var tmp_1 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    }
    var cachedSerializer = tmp;
    if (cachedSerializer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return cachedSerializer;
    }
    var tmp_2;
    if (typeArguments.v()) {
      tmp_2 = _this__u8e3s4.af(rootClass);
    } else {
      var tmp1_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var serializers = tmp_3;
      var tmp2_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      tmp_2 = tmp2_elvis_lhs == null ? _this__u8e3s4.ze(rootClass, serializers) : tmp2_elvis_lhs;
    }
    var contextualSerializer = tmp_2;
    var tmp_4;
    if (contextualSerializer == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_4 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp4_safe_receiver = tmp_4;
    return tmp4_safe_receiver == null ? null : nullable(tmp4_safe_receiver, isNullable);
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.z(0).q5();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().bf(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().bf(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().cf(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().cf(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    return serializerOrNull(it);
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_safe_receiver = serializerOrNull(it);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.z(0).q5();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.z(0).q5();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.de().df()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.ef_1 = original;
    this.ff_1 = kClass;
    this.gf_1 = this.ef_1.hf() + '<' + this.ff_1.e5() + '>';
  }
  protoOf(ContextDescriptor).if = function () {
    return this.ef_1.if();
  };
  protoOf(ContextDescriptor).jf = function () {
    return this.ef_1.jf();
  };
  protoOf(ContextDescriptor).kf = function () {
    return this.ef_1.kf();
  };
  protoOf(ContextDescriptor).df = function () {
    return this.ef_1.df();
  };
  protoOf(ContextDescriptor).lf = function () {
    return this.ef_1.lf();
  };
  protoOf(ContextDescriptor).mf = function (index) {
    return this.ef_1.mf(index);
  };
  protoOf(ContextDescriptor).nf = function (index) {
    return this.ef_1.nf(index);
  };
  protoOf(ContextDescriptor).of = function (name) {
    return this.ef_1.of(name);
  };
  protoOf(ContextDescriptor).pf = function (index) {
    return this.ef_1.pf(index);
  };
  protoOf(ContextDescriptor).qf = function (index) {
    return this.ef_1.qf(index);
  };
  protoOf(ContextDescriptor).hf = function () {
    return this.gf_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.ef_1, another.ef_1) ? another.ff_1.equals(this.ff_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.ff_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.gf_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.ff_1 + ', original: ' + this.ef_1 + ')';
  };
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.af(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.de();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ff_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.rf_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.vf_1 = $this_elementDescriptors;
    this.uf_1 = $this_elementDescriptors.jf();
  }
  protoOf(elementDescriptors$1$1).q = function () {
    return this.uf_1 > 0;
  };
  protoOf(elementDescriptors$1$1).r = function () {
    var tmp = this.vf_1.jf();
    var tmp1 = this.uf_1;
    this.uf_1 = tmp1 - 1 | 0;
    return this.vf_1.nf(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.wf_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv).p = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.wf_1);
  };
  function elementNames$1$1($this_elementNames) {
    this.yf_1 = $this_elementNames;
    this.xf_1 = $this_elementNames.jf();
  }
  protoOf(elementNames$1$1).q = function () {
    return this.xf_1 > 0;
  };
  protoOf(elementNames$1$1).r = function () {
    var tmp = this.yf_1.jf();
    var tmp1 = this.xf_1;
    this.xf_1 = tmp1 - 1 | 0;
    return this.yf_1.pf(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementNames) {
    this.zf_1 = $this_elementNames;
  }
  protoOf(_no_name_provided__qut3iv_0).p = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementNames>.<anonymous>' call
    return new elementNames$1$1(this.zf_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.je_1.s(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.ge_1 = serialName;
    this.he_1 = false;
    this.ie_1 = emptyList();
    this.je_1 = ArrayList_init_$Create$_0();
    this.ke_1 = HashSet_init_$Create$();
    this.le_1 = ArrayList_init_$Create$_0();
    this.me_1 = ArrayList_init_$Create$_0();
    this.ne_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).ag = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.ke_1.m(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.ge_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.je_1.m(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.le_1.m(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.me_1.m(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ne_1.m(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).oe = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ag(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ag.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.je_1.s(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.mg_1;
    _hashCode$factory();
    return this_0.l3();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.lg_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.pf(it) + ': ' + this$0.nf(it).hf();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.bg_1 = serialName;
    this.cg_1 = kind;
    this.dg_1 = elementsCount;
    this.eg_1 = builder.ie_1;
    this.fg_1 = toHashSet(builder.je_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.je_1;
    tmp.gg_1 = copyToArray(this_0);
    this.hg_1 = compactArray(builder.le_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.me_1;
    tmp_0.ig_1 = copyToArray(this_1);
    this.jg_1 = toBooleanArray(builder.ne_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.gg_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.p();
    while (tmp0_iterator.q()) {
      var item = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.aa_1, item.z9_1);
      destination.m(tmp$ret$2);
    }
    tmp_1.kg_1 = toMap(destination);
    this.lg_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.mg_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).hf = function () {
    return this.bg_1;
  };
  protoOf(SerialDescriptorImpl).lf = function () {
    return this.cg_1;
  };
  protoOf(SerialDescriptorImpl).jf = function () {
    return this.dg_1;
  };
  protoOf(SerialDescriptorImpl).if = function () {
    return this.eg_1;
  };
  protoOf(SerialDescriptorImpl).ng = function () {
    return this.fg_1;
  };
  protoOf(SerialDescriptorImpl).pf = function (index) {
    return getChecked(this.gg_1, index);
  };
  protoOf(SerialDescriptorImpl).of = function (name) {
    var tmp0_elvis_lhs = this.kg_1.s1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SerialDescriptorImpl).mf = function (index) {
    return getChecked(this.ig_1, index);
  };
  protoOf(SerialDescriptorImpl).nf = function (index) {
    return getChecked(this.hg_1, index);
  };
  protoOf(SerialDescriptorImpl).qf = function (index) {
    return getChecked_0(this.jg_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hf() === other.hf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.lg_1, other.lg_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jf() === other.jf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jf();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nf(index).hf() === other.nf(index).hf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nf(index).lf(), other.nf(index).lf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.dg_1);
    var tmp_0 = this.bg_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).e5());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).og = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).pg = function () {
    return true;
  };
  protoOf(AbstractDecoder).qg = function () {
    return null;
  };
  protoOf(AbstractDecoder).rg = function () {
    var tmp = this.og();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).sg = function () {
    var tmp = this.og();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tg = function () {
    var tmp = this.og();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ug = function () {
    var tmp = this.og();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).vg = function () {
    var tmp = this.og();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wg = function () {
    var tmp = this.og();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xg = function () {
    var tmp = this.og();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).yg = function () {
    var tmp = this.og();
    return tmp instanceof Char ? tmp.n7_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).zg = function () {
    var tmp = this.og();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ah = function (enumDescriptor) {
    var tmp = this.og();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bh = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ch = function (deserializer, previousValue) {
    return this.dh(deserializer);
  };
  protoOf(AbstractDecoder).eh = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).fh = function (descriptor) {
  };
  protoOf(AbstractDecoder).gh = function (descriptor, index) {
    return this.rg();
  };
  protoOf(AbstractDecoder).hh = function (descriptor, index) {
    return this.sg();
  };
  protoOf(AbstractDecoder).ih = function (descriptor, index) {
    return this.tg();
  };
  protoOf(AbstractDecoder).jh = function (descriptor, index) {
    return this.ug();
  };
  protoOf(AbstractDecoder).kh = function (descriptor, index) {
    return this.vg();
  };
  protoOf(AbstractDecoder).lh = function (descriptor, index) {
    return this.wg();
  };
  protoOf(AbstractDecoder).mh = function (descriptor, index) {
    return this.xg();
  };
  protoOf(AbstractDecoder).nh = function (descriptor, index) {
    return this.yg();
  };
  protoOf(AbstractDecoder).oh = function (descriptor, index) {
    return this.zg();
  };
  protoOf(AbstractDecoder).ph = function (descriptor, index) {
    return this.bh(descriptor.nf(index));
  };
  protoOf(AbstractDecoder).qh = function (descriptor, index, deserializer, previousValue) {
    return this.ch(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).sh = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.de().df();
    return (isNullabilitySupported ? true : this.pg()) ? this.ch(deserializer, previousValue) : this.qg();
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).eh = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).fh = function (descriptor) {
  };
  protoOf(AbstractEncoder).xh = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).yh = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  protoOf(AbstractEncoder).zh = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).ai = function (value) {
    return this.yh(value);
  };
  protoOf(AbstractEncoder).bi = function (value) {
    return this.yh(value);
  };
  protoOf(AbstractEncoder).ci = function (value) {
    return this.yh(value);
  };
  protoOf(AbstractEncoder).di = function (value) {
    return this.yh(value);
  };
  protoOf(AbstractEncoder).ei = function (value) {
    return this.yh(value);
  };
  protoOf(AbstractEncoder).fi = function (value) {
    return this.yh(value);
  };
  protoOf(AbstractEncoder).gi = function (value) {
    return this.yh(value);
  };
  protoOf(AbstractEncoder).hi = function (value) {
    return this.yh(new Char(value));
  };
  protoOf(AbstractEncoder).ii = function (value) {
    return this.yh(value);
  };
  protoOf(AbstractEncoder).ji = function (enumDescriptor, index) {
    return this.yh(index);
  };
  protoOf(AbstractEncoder).ki = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).li = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.ai(value);
    }
  };
  protoOf(AbstractEncoder).mi = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.bi(value);
    }
  };
  protoOf(AbstractEncoder).ni = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.ci(value);
    }
  };
  protoOf(AbstractEncoder).oi = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.di(value);
    }
  };
  protoOf(AbstractEncoder).pi = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.ei(value);
    }
  };
  protoOf(AbstractEncoder).qi = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.fi(value);
    }
  };
  protoOf(AbstractEncoder).ri = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.gi(value);
    }
  };
  protoOf(AbstractEncoder).si = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.hi(value);
    }
  };
  protoOf(AbstractEncoder).ti = function (descriptor, index, value) {
    if (this.xh(descriptor, index)) {
      this.ii(value);
    }
  };
  protoOf(AbstractEncoder).ui = function (descriptor, index) {
    return this.xh(descriptor, index) ? this.ki(descriptor.nf(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).vi = function (descriptor, index, serializer, value) {
    if (this.xh(descriptor, index)) {
      this.wi(serializer, value);
    }
  };
  protoOf(AbstractEncoder).xi = function (descriptor, index, serializer, value) {
    if (this.xh(descriptor, index)) {
      this.yi(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    this.cj_1 = -1;
    this.dj_1 = -3;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    return Companion_instance_0;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.oh($this.de(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.rh($this.de(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).te = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.de();
    var composite = encoder.eh(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.ti(this.de(), 0, actualSerializer.de().hf());
    var tmp = this.de();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.vi(tmp, 1, tmp$ret$0, value);
    composite.fh(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).ee = function (encoder, value) {
    return this.te(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).fe = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.de();
    var composite = decoder.eh(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.uh()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.vh(this.de());
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.oh(this.de(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var value_0 = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (value_0 == null) {
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  var message = 'Cannot read polymorphic value before its type token';
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = value_0;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              value = composite.rh(this.de(), index, serializer);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var value_1 = value;
        // Inline function 'kotlin.contracts.contract' call
        if (value_1 == null) {
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = value_1;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$0 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.fh(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).ue = function (decoder, klassName) {
    return decoder.th().ej(this.se(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ve = function (encoder, value) {
    return encoder.th().fj(this.se(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.e5();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.e5() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.e5() + "' has to be sealed and '@Serializable'.\n") + ("Alternatively, register the serializer for '" + subClassName + "' explicitly in a corresponding SerializersModule."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.gj_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).de = function () {
    return this.gj_1;
  };
  protoOf(NothingSerializer_0).hj = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).ee = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.hj(encoder, tmp);
  };
  protoOf(NothingSerializer_0).fe = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.ij_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).de = function () {
    return this.ij_1;
  };
  protoOf(DurationSerializer).jj = function (encoder, value) {
    encoder.ii(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).ee = function (encoder, value) {
    return this.jj(encoder, value instanceof Duration ? value.sb_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).kj = function (decoder) {
    return Companion_getInstance().rb(decoder.zg());
  };
  protoOf(DurationSerializer).fe = function (decoder) {
    return new Duration(this.kj(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).hf = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).hf = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).hf = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).hf = function () {
    return 'kotlin.Array';
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.nj_1 = elementDescriptor;
    this.oj_1 = 1;
  }
  protoOf(ListLikeDescriptor).lf = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).jf = function () {
    return this.oj_1;
  };
  protoOf(ListLikeDescriptor).pf = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).of = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).qf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.hf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).mf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.hf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).nf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.hf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.nj_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.nj_1, other.nj_1) ? this.hf() === other.hf() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.nj_1), 31) + getStringHashCode(this.hf()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.hf() + '(' + this.nj_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.tj_1 = serialName;
    this.uj_1 = keyDescriptor;
    this.vj_1 = valueDescriptor;
    this.wj_1 = 2;
  }
  protoOf(MapLikeDescriptor).hf = function () {
    return this.tj_1;
  };
  protoOf(MapLikeDescriptor).lf = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).jf = function () {
    return this.wj_1;
  };
  protoOf(MapLikeDescriptor).pf = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).of = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).qf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.hf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).mf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.hf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).nf = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.hf() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.uj_1;
        break;
      case 1:
        tmp = this.vj_1;
        break;
      default:
        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.hf() === other.hf()))
      return false;
    if (!equals(this.uj_1, other.uj_1))
      return false;
    if (!equals(this.vj_1, other.vj_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.hf());
    result = imul(31, result) + hashCode(this.uj_1) | 0;
    result = imul(31, result) + hashCode(this.vj_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.hf() + '(' + this.uj_1 + ', ' + this.vj_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.bk_1 = primitive.hf() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).hf = function () {
    return this.bk_1;
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.dk_1 = new ArrayListClassDesc(element.de());
  }
  protoOf(ArrayListSerializer).de = function () {
    return this.dk_1;
  };
  protoOf(ArrayListSerializer).ek = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).fk = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ArrayListSerializer).gk = function (_this__u8e3s4) {
    return this.fk(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).hk = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).ik = function (_this__u8e3s4) {
    return this.hk(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).jk = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).kk = function (_this__u8e3s4) {
    return this.jk((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).lk = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c2(size);
  };
  protoOf(ArrayListSerializer).mk = function (_this__u8e3s4, size) {
    return this.lk(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).nk = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(index, element);
  };
  protoOf(ArrayListSerializer).ok = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.nk(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.zk_1 = new HashSetClassDesc(eSerializer.de());
  }
  protoOf(HashSetSerializer).de = function () {
    return this.zk_1;
  };
  protoOf(HashSetSerializer).ek = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).al = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashSetSerializer).gk = function (_this__u8e3s4) {
    return this.al(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).bl = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).ik = function (_this__u8e3s4) {
    return this.bl(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).cl = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).kk = function (_this__u8e3s4) {
    return this.cl((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).dl = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).mk = function (_this__u8e3s4, size) {
    return this.dl(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).el = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.m(element);
  };
  protoOf(HashSetSerializer).ok = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.el(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.gl_1 = new LinkedHashSetClassDesc(eSerializer.de());
  }
  protoOf(LinkedHashSetSerializer).de = function () {
    return this.gl_1;
  };
  protoOf(LinkedHashSetSerializer).ek = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).hl = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashSetSerializer).gk = function (_this__u8e3s4) {
    return this.hl(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).il = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).ik = function (_this__u8e3s4) {
    return this.il(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).cl = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).kk = function (_this__u8e3s4) {
    return this.cl((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).jl = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).mk = function (_this__u8e3s4, size) {
    return this.jl(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).kl = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.m(element);
  };
  protoOf(LinkedHashSetSerializer).ok = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.kl(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.nl_1 = new HashMapClassDesc(kSerializer.de(), vSerializer.de());
  }
  protoOf(HashMapSerializer).de = function () {
    return this.nl_1;
  };
  protoOf(HashMapSerializer).ol = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(HashMapSerializer).pl = function (_this__u8e3s4) {
    return this.ol((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).ql = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.t1().p();
  };
  protoOf(HashMapSerializer).rl = function (_this__u8e3s4) {
    return this.ql((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).ek = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).sl = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(HashMapSerializer).gk = function (_this__u8e3s4) {
    return this.sl(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).tl = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).ik = function (_this__u8e3s4) {
    return this.tl(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).ul = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).kk = function (_this__u8e3s4) {
    return this.ul((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).vl = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).mk = function (_this__u8e3s4, size) {
    return this.vl(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.cm_1 = new LinkedHashMapClassDesc(kSerializer.de(), vSerializer.de());
  }
  protoOf(LinkedHashMapSerializer).de = function () {
    return this.cm_1;
  };
  protoOf(LinkedHashMapSerializer).ol = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(LinkedHashMapSerializer).pl = function (_this__u8e3s4) {
    return this.ol((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ql = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.t1().p();
  };
  protoOf(LinkedHashMapSerializer).rl = function (_this__u8e3s4) {
    return this.ql((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ek = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).dm = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.s(), 2);
  };
  protoOf(LinkedHashMapSerializer).gk = function (_this__u8e3s4) {
    return this.dm(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).em = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).ik = function (_this__u8e3s4) {
    return this.em(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ul = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).kk = function (_this__u8e3s4) {
    return this.ul((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).fm = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).mk = function (_this__u8e3s4, size) {
    return this.fm(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.hm_1 = kClass;
    this.im_1 = new ArrayClassDesc(eSerializer.de());
  }
  protoOf(ReferenceArraySerializer).de = function () {
    return this.im_1;
  };
  protoOf(ReferenceArraySerializer).jm = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).pl = function (_this__u8e3s4) {
    return this.jm((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).km = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).rl = function (_this__u8e3s4) {
    return this.km((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ek = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).lm = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(ReferenceArraySerializer).gk = function (_this__u8e3s4) {
    return this.lm(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).mm = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.hm_1);
  };
  protoOf(ReferenceArraySerializer).ik = function (_this__u8e3s4) {
    return this.mm(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).nm = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).kk = function (_this__u8e3s4) {
    return this.nm((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).om = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c2(size);
  };
  protoOf(ReferenceArraySerializer).mk = function (_this__u8e3s4, size) {
    return this.om(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).pm = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(index, element);
  };
  protoOf(ReferenceArraySerializer).ok = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.pm(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).qk = function (_this__u8e3s4) {
    return _this__u8e3s4.s();
  };
  protoOf(CollectionSerializer).pl = function (_this__u8e3s4) {
    return this.qk((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).rk = function (_this__u8e3s4) {
    return _this__u8e3s4.p();
  };
  protoOf(CollectionSerializer).rl = function (_this__u8e3s4) {
    return this.rk((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.wl_1 = keySerializer;
    this.xl_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).yl = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.g7_1;
    var last = progression.h7_1;
    var step_0 = progression.i7_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.zl(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).uk = function (decoder, builder, startIndex, size) {
    return this.yl(decoder, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).zl = function (decoder, index, builder, checkIndex) {
    var key = decoder.rh(this.de(), index, this.wl_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.vh(this.de());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(this_0 === (index + 1 | 0))) {
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.q1(key)) {
      var tmp_2 = this.xl_1.de().lf();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.qh(this.de(), vIndex, this.xl_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.rh(this.de(), vIndex, this.xl_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.n1(key, value);
  };
  protoOf(MapLikeSerializer).vk = function (decoder, index, builder, checkIndex) {
    return this.zl(decoder, index, (!(builder == null) ? isInterface(builder, MutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).tk = function (encoder, value) {
    var size = this.pl(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.de();
    var composite = encoder.aj(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.rl(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = iterator;
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.v2();
      // Inline function 'kotlin.collections.component2' call
      var v = element.l3();
      var tmp = this.de();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.vi(tmp, tmp0, this.wl_1, k);
      var tmp_0 = this.de();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.vi(tmp_0, tmp1, this.xl_1, v);
    }
    composite.fh(descriptor);
  };
  protoOf(MapLikeSerializer).ee = function (encoder, value) {
    return this.tk(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.sk_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).tk = function (encoder, value) {
    var size = this.pl(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.de();
    var composite = encoder.aj(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.rl(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.vi(this.de(), index, this.sk_1, iterator.r());
      }
       while (inductionVariable < size);
    composite.fh(descriptor);
  };
  protoOf(CollectionLikeSerializer).ee = function (encoder, value) {
    return this.tk(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(CollectionLikeSerializer).uk = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size >= 0)) {
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.vk(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).vk = function (decoder, index, builder, checkIndex) {
    this.ok(builder, index, decoder.rh(this.de(), index, this.sk_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.wh($this.de());
    $this.mk(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).xk = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.kk(previous);
    var builder = tmp1_elvis_lhs == null ? this.ek() : tmp1_elvis_lhs;
    var startIndex = this.gk(builder);
    var compositeDecoder = decoder.eh(this.de());
    if (compositeDecoder.uh()) {
      this.uk(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.vh(this.de());
        if (index === -1)
          break $l$loop;
        this.wk(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.fh(this.de());
    return this.ik(builder);
  };
  protoOf(AbstractCollectionSerializer).fe = function (decoder) {
    return this.xk(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).wk = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.vk(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.vk.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.rm_1 = new PrimitiveArrayDescriptor(primitiveSerializer.de());
  }
  protoOf(PrimitiveArraySerializer).de = function () {
    return this.rm_1;
  };
  protoOf(PrimitiveArraySerializer).sm = function (_this__u8e3s4) {
    return _this__u8e3s4.tm();
  };
  protoOf(PrimitiveArraySerializer).gk = function (_this__u8e3s4) {
    return this.sm(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).um = function (_this__u8e3s4) {
    return _this__u8e3s4.vm();
  };
  protoOf(PrimitiveArraySerializer).ik = function (_this__u8e3s4) {
    return this.um(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).wm = function (_this__u8e3s4, size) {
    return _this__u8e3s4.c2(size);
  };
  protoOf(PrimitiveArraySerializer).mk = function (_this__u8e3s4, size) {
    return this.wm(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).xm = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).rl = function (_this__u8e3s4) {
    return this.xm((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ym = function (_this__u8e3s4, index, element) {
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ok = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE();
    return this.ym(tmp, index, (element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).ek = function () {
    return this.kk(this.zm());
  };
  protoOf(PrimitiveArraySerializer).cn = function (encoder, value) {
    var size = this.pl(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.rm_1;
    var composite = encoder.aj(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.bn(composite, value, size);
    composite.fh(descriptor);
  };
  protoOf(PrimitiveArraySerializer).ee = function (encoder, value) {
    return this.cn(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).tk = function (encoder, value) {
    return this.cn(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).fe = function (decoder) {
    return this.xk(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).dn = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.tm() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.c2(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.c2.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.en_1 = longArray(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance_0();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).l8(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance_0();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.in_1[slot] = $this.in_1[slot].p8((new Long(1, 0)).l8(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.in_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance_0();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.in_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.k8());
          slotMarks = slotMarks.p8((new Long(1, 0)).l8(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.gn_1($this.fn_1, index)) {
            $this.in_1[slot] = slotMarks;
            return index;
          }
        }
        $this.in_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.fn_1 = descriptor;
    this.gn_1 = readIfAbsent;
    var elementsCount = this.fn_1.jf();
    Companion_getInstance_0();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance_0();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).l8(elementsCount);
      }
      tmp.hn_1 = tmp_0;
      this.in_1 = Companion_getInstance_7().en_1;
    } else {
      this.hn_1 = new Long(0, 0);
      this.in_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).jn = function (index) {
    Companion_getInstance_0();
    if (index < 64) {
      this.hn_1 = this.hn_1.p8((new Long(1, 0)).l8(index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).kn = function () {
    var elementsCount = this.fn_1.jf();
    while (!this.hn_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.hn_1.k8());
      this.hn_1 = this.hn_1.p8((new Long(1, 0)).l8(index));
      if (this.gn_1(this.fn_1, index)) {
        return index;
      }
    }
    Companion_getInstance_0();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.ln_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.ln_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.serialization.internal.EnumSerializer.createUnmarkedDescriptor.<anonymous>' call
      d.ao(element.z6_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.mn_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer(serialName, values) {
    this.ln_1 = values;
    this.mn_1 = null;
    var tmp = this;
    tmp.nn_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).de = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.nn_1;
    descriptor$factory_0();
    return this_0.l3();
  };
  protoOf(EnumSerializer).bo = function (encoder, value) {
    var index = indexOf(this.ln_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0('' + value + ' is not a valid enum ' + this.de().hf() + ', ' + ('must be one of ' + contentToString(this.ln_1)));
    }
    encoder.ji(this.de(), index);
  };
  protoOf(EnumSerializer).ee = function (encoder, value) {
    return this.bo(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).fe = function (decoder) {
    var index = decoder.ah(this.de());
    if (!(0 <= index ? index <= (this.ln_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.de().hf() + ' enum values, ' + ('values size is ' + this.ln_1.length));
    }
    return this.ln_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.de().hf() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.po_1;
    elementDescriptors$factory();
    return this_0.l3();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = fillArrayVal(Array(tmp_0), null);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.pf(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.oo_1 = ENUM_getInstance();
    var tmp = this;
    tmp.po_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).lf = function () {
    return this.oo_1;
  };
  protoOf(EnumDescriptor).nf = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(!(other == null) ? isInterface(other, SerialDescriptor) : false))
      return false;
    if (!(other.lf() === ENUM_getInstance()))
      return false;
    if (!(this.hf() === other.hf()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.hf() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.hf());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = get_elementNames(this).p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.EnumDescriptor.hashCode.<anonymous>' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.de();
    }, null);
  }
  function elementDescriptors$factory() {
    return getPropertyCallableRef('elementDescriptors', 1, KProperty1, function (receiver) {
      return _get_elementDescriptors__y23q9p(receiver);
    }, null);
  }
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.ep_1 = true;
  }
  protoOf(InlineClassDescriptor).kf = function () {
    return this.ep_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hf() === other.hf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.ep_1 ? contentEquals(this.qo(), other.qo()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jf() === other.jf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jf();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nf(index).hf() === other.nf(index).hf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nf(index).lf(), other.nf(index).lf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.fp_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).gp = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.fp_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).de = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).ee = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).fe = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.ip_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).th = function () {
    return this.ip_1;
  };
  protoOf(NoOpEncoder).yh = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).zh = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ai = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).bi = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ci = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).di = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ei = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).fi = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).gi = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).hi = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ii = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ji = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.jp_1 = OBJECT_getInstance();
    this.kp_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).lf = function () {
    return this.jp_1;
  };
  protoOf(NothingSerialDescriptor).hf = function () {
    return this.kp_1;
  };
  protoOf(NothingSerialDescriptor).jf = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).pf = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).of = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).qf = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).nf = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).mf = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.kp_1) + imul(31, this.jp_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.lp_1 = serializer;
    this.mp_1 = new SerialDescriptorForNullable(this.lp_1.de());
  }
  protoOf(NullableSerializer).de = function () {
    return this.mp_1;
  };
  protoOf(NullableSerializer).np = function (encoder, value) {
    if (!(value == null)) {
      encoder.zi();
      encoder.wi(this.lp_1, value);
    } else {
      encoder.zh();
    }
  };
  protoOf(NullableSerializer).ee = function (encoder, value) {
    return this.np(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(NullableSerializer).fe = function (decoder) {
    return decoder.pg() ? decoder.dh(this.lp_1) : decoder.qg();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.lp_1, other.lp_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.lp_1);
  };
  function SerialDescriptorForNullable(original) {
    this.rf_1 = original;
    this.sf_1 = this.rf_1.hf() + '?';
    this.tf_1 = cachedSerialNames(this.rf_1);
  }
  protoOf(SerialDescriptorForNullable).if = function () {
    return this.rf_1.if();
  };
  protoOf(SerialDescriptorForNullable).jf = function () {
    return this.rf_1.jf();
  };
  protoOf(SerialDescriptorForNullable).kf = function () {
    return this.rf_1.kf();
  };
  protoOf(SerialDescriptorForNullable).lf = function () {
    return this.rf_1.lf();
  };
  protoOf(SerialDescriptorForNullable).mf = function (index) {
    return this.rf_1.mf(index);
  };
  protoOf(SerialDescriptorForNullable).nf = function (index) {
    return this.rf_1.nf(index);
  };
  protoOf(SerialDescriptorForNullable).of = function (name) {
    return this.rf_1.of(name);
  };
  protoOf(SerialDescriptorForNullable).pf = function (index) {
    return this.rf_1.pf(index);
  };
  protoOf(SerialDescriptorForNullable).qf = function (index) {
    return this.rf_1.qf(index);
  };
  protoOf(SerialDescriptorForNullable).hf = function () {
    return this.sf_1;
  };
  protoOf(SerialDescriptorForNullable).ng = function () {
    return this.tf_1;
  };
  protoOf(SerialDescriptorForNullable).df = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.rf_1, other.rf_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.rf_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.rf_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.ie_1 = this$0.pp_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.op_1 = objectInstance;
    this.pp_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.qp_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).de = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.qp_1;
    descriptor$factory_1();
    return this_0.l3();
  };
  protoOf(ObjectSerializer).te = function (encoder, value) {
    encoder.eh(this.de()).fh(this.de());
  };
  protoOf(ObjectSerializer).ee = function (encoder, value) {
    return this.te(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).fe = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.de();
    var composite = decoder.eh(descriptor);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      if (composite.uh()) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.vh(this.de());
      if (index === -1) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.fh(descriptor);
    return this.op_1;
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.de();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.ng();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.jf());
    var inductionVariable = 0;
    var last = _this__u8e3s4.jf();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.pf(i);
        result.m(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.q5();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var message = 'Captured type parameter ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        var message_0 = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.e5();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.v())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.pf(i);
          missingFields.m(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.hf());
  }
  function _get_childSerializers__7vnyfa($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.xn_1;
    childSerializers$factory();
    return this_0.l3();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.zn_1;
    _hashCode$factory_0();
    return this_0.l3();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.sn_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.sn_1[i];
        indices.n1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.pn_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gp();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.pn_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hp();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.de();
          destination.m(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.qo());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.pf(i) + ': ' + this$0.nf(i).hf();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.on_1 = serialName;
    this.pn_1 = generatedSerializer;
    this.qn_1 = elementsCount;
    this.rn_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.qn_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.sn_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.qn_1;
    tmp_3.tn_1 = fillArrayVal(Array(size), null);
    this.un_1 = null;
    this.vn_1 = booleanArray(this.qn_1);
    this.wn_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.xn_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.yn_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.zn_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).hf = function () {
    return this.on_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).jf = function () {
    return this.qn_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).lf = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).if = function () {
    var tmp0_elvis_lhs = this.un_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ng = function () {
    return this.wn_1.m1();
  };
  protoOf(PluginGeneratedSerialDescriptor).qo = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.yn_1;
    typeParameterDescriptors$factory();
    return this_0.l3();
  };
  protoOf(PluginGeneratedSerialDescriptor).ro = function (name, isOptional) {
    this.rn_1 = this.rn_1 + 1 | 0;
    this.sn_1[this.rn_1] = name;
    this.vn_1[this.rn_1] = isOptional;
    this.tn_1[this.rn_1] = null;
    if (this.rn_1 === (this.qn_1 - 1 | 0)) {
      this.wn_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ao = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ro(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ro.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).nf = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).de();
  };
  protoOf(PluginGeneratedSerialDescriptor).qf = function (index) {
    return getChecked_0(this.vn_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).mf = function (index) {
    var tmp0_elvis_lhs = getChecked(this.tn_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).pf = function (index) {
    return getChecked(this.sn_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).of = function (name) {
    var tmp0_elvis_lhs = this.wn_1.s1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hf() === other.hf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.qo(), other.qo())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jf() === other.jf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jf();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.nf(index).hf() === other.nf(index).hf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.nf(index).lf(), other.nf(index).lf())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.qn_1);
    var tmp_0 = this.hf() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.hf());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.hf();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.p();
    while (tmp0_iterator_0.q()) {
      var element_0 = tmp0_iterator_0.r();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.lf();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.qo();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_1()));
  }
  protoOf(CharArraySerializer_0).up = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.up((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).vp = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.vp((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).zm = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).wp = function (decoder, index, builder, checkIndex) {
    builder.zp(decoder.nh(this.rm_1, index));
  };
  protoOf(CharArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.wp(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.wp(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).aq = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.si(this.rm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).bn = function (encoder, content, size) {
    return this.aq(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).dq = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.dq((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).eq = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.eq((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).zm = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).fq = function (decoder, index, builder, checkIndex) {
    builder.iq(decoder.mh(this.rm_1, index));
  };
  protoOf(DoubleArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.fq(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.fq(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).jq = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ri(this.rm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).bn = function (encoder, content, size) {
    return this.jq(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).mq = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.mq((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).nq = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.nq((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).zm = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).oq = function (decoder, index, builder, checkIndex) {
    builder.rq(decoder.lh(this.rm_1, index));
  };
  protoOf(FloatArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.oq(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.oq(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).sq = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.qi(this.rm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).bn = function (encoder, content, size) {
    return this.sq(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).vq = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.vq((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).wq = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.wq((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).zm = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).xq = function (decoder, index, builder, checkIndex) {
    builder.ar(decoder.kh(this.rm_1, index));
  };
  protoOf(LongArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.xq(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.xq(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).br = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.pi(this.rm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).bn = function (encoder, content, size) {
    return this.br(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_2()));
  }
  protoOf(ULongArraySerializer_0).er = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.er(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.qd_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).fr = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.fr(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.qd_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).gr = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).zm = function () {
    return new ULongArray(this.gr());
  };
  protoOf(ULongArraySerializer_0).hr = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.ph(this.rm_1, index).vg();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.kr(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.hr(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.hr(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).lr = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ui(this.rm_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.ei(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).bn = function (encoder, content, size) {
    return this.lr(encoder, content instanceof ULongArray ? content.qd_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).or = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.or((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).pr = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.pr((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).zm = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).qr = function (decoder, index, builder, checkIndex) {
    builder.tr(decoder.jh(this.rm_1, index));
  };
  protoOf(IntArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.qr(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.qr(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).ur = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.oi(this.rm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).bn = function (encoder, content, size) {
    return this.ur(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_3()));
  }
  protoOf(UIntArraySerializer_0).xr = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.xr(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.fd_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).yr = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.yr(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.fd_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).zr = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).zm = function () {
    return new UIntArray(this.zr());
  };
  protoOf(UIntArraySerializer_0).as = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.ph(this.rm_1, index).ug();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.ds(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.as(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.as(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).es = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ui(this.rm_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.di(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).bn = function (encoder, content, size) {
    return this.es(encoder, content instanceof UIntArray ? content.fd_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).hs = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.hs((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).is = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.is((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).zm = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).js = function (decoder, index, builder, checkIndex) {
    builder.ms(decoder.ih(this.rm_1, index));
  };
  protoOf(ShortArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.js(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.js(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ns = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ni(this.rm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).bn = function (encoder, content, size) {
    return this.ns(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_4()));
  }
  protoOf(UShortArraySerializer_0).qs = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.qs(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.be_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).rs = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.rs(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.be_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).ss = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).zm = function () {
    return new UShortArray(this.ss());
  };
  protoOf(UShortArraySerializer_0).ts = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.ph(this.rm_1, index).tg();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.ws(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.ts(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.ts(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).xs = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ui(this.rm_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.ci(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).bn = function (encoder, content, size) {
    return this.xs(encoder, content instanceof UShortArray ? content.be_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).at = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.at((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).bt = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.bt((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).zm = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).ct = function (decoder, index, builder, checkIndex) {
    builder.ft(decoder.hh(this.rm_1, index));
  };
  protoOf(ByteArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.ct(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.ct(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).gt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.mi(this.rm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).bn = function (encoder, content, size) {
    return this.gt(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_5()));
  }
  protoOf(UByteArraySerializer_0).jt = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.jt(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.uc_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).kt = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.kt(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.uc_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).lt = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).zm = function () {
    return new UByteArray(this.lt());
  };
  protoOf(UByteArraySerializer_0).mt = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.ph(this.rm_1, index).sg();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.pt(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.mt(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.mt(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).qt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ui(this.rm_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.bi(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).bn = function (encoder, content, size) {
    return this.qt(encoder, content instanceof UByteArray ? content.uc_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).tt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).pl = function (_this__u8e3s4) {
    return this.tt((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).ut = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).kk = function (_this__u8e3s4) {
    return this.ut((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).zm = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).vt = function (decoder, index, builder, checkIndex) {
    builder.yt(decoder.gh(this.rm_1, index));
  };
  protoOf(BooleanArraySerializer_0).vk = function (decoder, index, builder, checkIndex) {
    return this.vt(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).an = function (decoder, index, builder, checkIndex) {
    return this.vt(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).zt = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.li(this.rm_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).bn = function (encoder, content, size) {
    return this.zt(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.xp_1 = bufferWithData;
    this.yp_1 = bufferWithData.length;
    this.c2(10);
  }
  protoOf(CharArrayBuilder).tm = function () {
    return this.yp_1;
  };
  protoOf(CharArrayBuilder).c2 = function (requiredCapacity) {
    if (this.xp_1.length < requiredCapacity)
      this.xp_1 = copyOf(this.xp_1, coerceAtLeast(requiredCapacity, imul(this.xp_1.length, 2)));
  };
  protoOf(CharArrayBuilder).zp = function (c) {
    this.dn();
    var tmp = this.xp_1;
    var tmp1 = this.yp_1;
    this.yp_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(CharArrayBuilder).vm = function () {
    return copyOf(this.xp_1, this.yp_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.gq_1 = bufferWithData;
    this.hq_1 = bufferWithData.length;
    this.c2(10);
  }
  protoOf(DoubleArrayBuilder).tm = function () {
    return this.hq_1;
  };
  protoOf(DoubleArrayBuilder).c2 = function (requiredCapacity) {
    if (this.gq_1.length < requiredCapacity)
      this.gq_1 = copyOf_0(this.gq_1, coerceAtLeast(requiredCapacity, imul(this.gq_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).iq = function (c) {
    this.dn();
    var tmp = this.gq_1;
    var tmp1 = this.hq_1;
    this.hq_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(DoubleArrayBuilder).vm = function () {
    return copyOf_0(this.gq_1, this.hq_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.pq_1 = bufferWithData;
    this.qq_1 = bufferWithData.length;
    this.c2(10);
  }
  protoOf(FloatArrayBuilder).tm = function () {
    return this.qq_1;
  };
  protoOf(FloatArrayBuilder).c2 = function (requiredCapacity) {
    if (this.pq_1.length < requiredCapacity)
      this.pq_1 = copyOf_1(this.pq_1, coerceAtLeast(requiredCapacity, imul(this.pq_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).rq = function (c) {
    this.dn();
    var tmp = this.pq_1;
    var tmp1 = this.qq_1;
    this.qq_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(FloatArrayBuilder).vm = function () {
    return copyOf_1(this.pq_1, this.qq_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.yq_1 = bufferWithData;
    this.zq_1 = bufferWithData.length;
    this.c2(10);
  }
  protoOf(LongArrayBuilder).tm = function () {
    return this.zq_1;
  };
  protoOf(LongArrayBuilder).c2 = function (requiredCapacity) {
    if (this.yq_1.length < requiredCapacity)
      this.yq_1 = copyOf_2(this.yq_1, coerceAtLeast(requiredCapacity, imul(this.yq_1.length, 2)));
  };
  protoOf(LongArrayBuilder).ar = function (c) {
    this.dn();
    var tmp = this.yq_1;
    var tmp1 = this.zq_1;
    this.zq_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(LongArrayBuilder).vm = function () {
    return copyOf_2(this.yq_1, this.zq_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ir_1 = bufferWithData;
    this.jr_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.c2(10);
  }
  protoOf(ULongArrayBuilder).tm = function () {
    return this.jr_1;
  };
  protoOf(ULongArrayBuilder).c2 = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.ir_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.ir_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.ir_1), 2));
      tmp.ir_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).kr = function (c) {
    this.dn();
    var tmp = this.ir_1;
    var tmp1 = this.jr_1;
    this.jr_1 = tmp1 + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, tmp1, c);
  };
  protoOf(ULongArrayBuilder).au = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.ir_1;
    var newSize = this.jr_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(this_0), newSize));
  };
  protoOf(ULongArrayBuilder).vm = function () {
    return new ULongArray(this.au());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.rr_1 = bufferWithData;
    this.sr_1 = bufferWithData.length;
    this.c2(10);
  }
  protoOf(IntArrayBuilder).tm = function () {
    return this.sr_1;
  };
  protoOf(IntArrayBuilder).c2 = function (requiredCapacity) {
    if (this.rr_1.length < requiredCapacity)
      this.rr_1 = copyOf_3(this.rr_1, coerceAtLeast(requiredCapacity, imul(this.rr_1.length, 2)));
  };
  protoOf(IntArrayBuilder).tr = function (c) {
    this.dn();
    var tmp = this.rr_1;
    var tmp1 = this.sr_1;
    this.sr_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(IntArrayBuilder).vm = function () {
    return copyOf_3(this.rr_1, this.sr_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.bs_1 = bufferWithData;
    this.cs_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.c2(10);
  }
  protoOf(UIntArrayBuilder).tm = function () {
    return this.cs_1;
  };
  protoOf(UIntArrayBuilder).c2 = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.bs_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.bs_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.bs_1), 2));
      tmp.bs_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).ds = function (c) {
    this.dn();
    var tmp = this.bs_1;
    var tmp1 = this.cs_1;
    this.cs_1 = tmp1 + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, tmp1, c);
  };
  protoOf(UIntArrayBuilder).bu = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.bs_1;
    var newSize = this.cs_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(this_0), newSize));
  };
  protoOf(UIntArrayBuilder).vm = function () {
    return new UIntArray(this.bu());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.ks_1 = bufferWithData;
    this.ls_1 = bufferWithData.length;
    this.c2(10);
  }
  protoOf(ShortArrayBuilder).tm = function () {
    return this.ls_1;
  };
  protoOf(ShortArrayBuilder).c2 = function (requiredCapacity) {
    if (this.ks_1.length < requiredCapacity)
      this.ks_1 = copyOf_4(this.ks_1, coerceAtLeast(requiredCapacity, imul(this.ks_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).ms = function (c) {
    this.dn();
    var tmp = this.ks_1;
    var tmp1 = this.ls_1;
    this.ls_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ShortArrayBuilder).vm = function () {
    return copyOf_4(this.ks_1, this.ls_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.us_1 = bufferWithData;
    this.vs_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.c2(10);
  }
  protoOf(UShortArrayBuilder).tm = function () {
    return this.vs_1;
  };
  protoOf(UShortArrayBuilder).c2 = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.us_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.us_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.us_1), 2));
      tmp.us_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).ws = function (c) {
    this.dn();
    var tmp = this.us_1;
    var tmp1 = this.vs_1;
    this.vs_1 = tmp1 + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, tmp1, c);
  };
  protoOf(UShortArrayBuilder).cu = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.us_1;
    var newSize = this.vs_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(this_0), newSize));
  };
  protoOf(UShortArrayBuilder).vm = function () {
    return new UShortArray(this.cu());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.dt_1 = bufferWithData;
    this.et_1 = bufferWithData.length;
    this.c2(10);
  }
  protoOf(ByteArrayBuilder).tm = function () {
    return this.et_1;
  };
  protoOf(ByteArrayBuilder).c2 = function (requiredCapacity) {
    if (this.dt_1.length < requiredCapacity)
      this.dt_1 = copyOf_5(this.dt_1, coerceAtLeast(requiredCapacity, imul(this.dt_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).ft = function (c) {
    this.dn();
    var tmp = this.dt_1;
    var tmp1 = this.et_1;
    this.et_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(ByteArrayBuilder).vm = function () {
    return copyOf_5(this.dt_1, this.et_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.nt_1 = bufferWithData;
    this.ot_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.c2(10);
  }
  protoOf(UByteArrayBuilder).tm = function () {
    return this.ot_1;
  };
  protoOf(UByteArrayBuilder).c2 = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.nt_1) < requiredCapacity) {
      var tmp = this;
      // Inline function 'kotlin.collections.copyOf' call
      var this_0 = this.nt_1;
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.nt_1), 2));
      tmp.nt_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).pt = function (c) {
    this.dn();
    var tmp = this.nt_1;
    var tmp1 = this.ot_1;
    this.ot_1 = tmp1 + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, tmp1, c);
  };
  protoOf(UByteArrayBuilder).du = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.nt_1;
    var newSize = this.ot_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(this_0), newSize));
  };
  protoOf(UByteArrayBuilder).vm = function () {
    return new UByteArray(this.du());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.wt_1 = bufferWithData;
    this.xt_1 = bufferWithData.length;
    this.c2(10);
  }
  protoOf(BooleanArrayBuilder).tm = function () {
    return this.xt_1;
  };
  protoOf(BooleanArrayBuilder).c2 = function (requiredCapacity) {
    if (this.wt_1.length < requiredCapacity)
      this.wt_1 = copyOf_6(this.wt_1, coerceAtLeast(requiredCapacity, imul(this.wt_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).yt = function (c) {
    this.dn();
    var tmp = this.wt_1;
    var tmp1 = this.xt_1;
    this.xt_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  protoOf(BooleanArrayBuilder).vm = function () {
    return copyOf_6(this.wt_1, this.xt_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().s1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.eu_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).de = function () {
    return this.eu_1;
  };
  protoOf(StringSerializer).fu = function (encoder, value) {
    return encoder.ii(value);
  };
  protoOf(StringSerializer).ee = function (encoder, value) {
    return this.fu(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).fe = function (decoder) {
    return decoder.zg();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.gu_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).de = function () {
    return this.gu_1;
  };
  protoOf(CharSerializer).hu = function (encoder, value) {
    return encoder.hi(value);
  };
  protoOf(CharSerializer).ee = function (encoder, value) {
    return this.hu(encoder, value instanceof Char ? value.n7_1 : THROW_CCE());
  };
  protoOf(CharSerializer).iu = function (decoder) {
    return decoder.yg();
  };
  protoOf(CharSerializer).fe = function (decoder) {
    return new Char(this.iu(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.ju_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).de = function () {
    return this.ju_1;
  };
  protoOf(DoubleSerializer).ku = function (encoder, value) {
    return encoder.gi(value);
  };
  protoOf(DoubleSerializer).ee = function (encoder, value) {
    return this.ku(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).fe = function (decoder) {
    return decoder.xg();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.lu_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).de = function () {
    return this.lu_1;
  };
  protoOf(FloatSerializer).mu = function (encoder, value) {
    return encoder.fi(value);
  };
  protoOf(FloatSerializer).ee = function (encoder, value) {
    return this.mu(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).fe = function (decoder) {
    return decoder.wg();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.nu_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).de = function () {
    return this.nu_1;
  };
  protoOf(LongSerializer).ou = function (encoder, value) {
    return encoder.ei(value);
  };
  protoOf(LongSerializer).ee = function (encoder, value) {
    return this.ou(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).fe = function (decoder) {
    return decoder.vg();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.pu_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).de = function () {
    return this.pu_1;
  };
  protoOf(IntSerializer).qu = function (encoder, value) {
    return encoder.di(value);
  };
  protoOf(IntSerializer).ee = function (encoder, value) {
    return this.qu(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).fe = function (decoder) {
    return decoder.ug();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.ru_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).de = function () {
    return this.ru_1;
  };
  protoOf(ShortSerializer).su = function (encoder, value) {
    return encoder.ci(value);
  };
  protoOf(ShortSerializer).ee = function (encoder, value) {
    return this.su(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).fe = function (decoder) {
    return decoder.tg();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.tu_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).de = function () {
    return this.tu_1;
  };
  protoOf(ByteSerializer).uu = function (encoder, value) {
    return encoder.bi(value);
  };
  protoOf(ByteSerializer).ee = function (encoder, value) {
    return this.uu(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).fe = function (decoder) {
    return decoder.sg();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.vu_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).de = function () {
    return this.vu_1;
  };
  protoOf(BooleanSerializer).wu = function (encoder, value) {
    return encoder.ai(value);
  };
  protoOf(BooleanSerializer).ee = function (encoder, value) {
    return this.wu(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).fe = function (decoder) {
    return decoder.rg();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.xu_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).de = function () {
    return this.xu_1.de();
  };
  protoOf(UnitSerializer).yu = function (decoder) {
    this.xu_1.fe(decoder);
  };
  protoOf(UnitSerializer).fe = function (decoder) {
    this.yu(decoder);
    return Unit_instance;
  };
  protoOf(UnitSerializer).zu = function (encoder, value) {
    this.xu_1.te(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).ee = function (encoder, value) {
    return this.zu(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.av_1 = serialName;
    this.bv_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).hf = function () {
    return this.av_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).lf = function () {
    return this.bv_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).jf = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).pf = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).of = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).qf = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).nf = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).mf = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.av_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.av_1 === other.av_1 ? equals(this.bv_1, other.bv_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.av_1) + imul(31, this.bv_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().m1();
    var tmp0_iterator = keys.p();
    while (tmp0_iterator.q()) {
      var primitive = tmp0_iterator.r();
      var simpleName = capitalize(ensureNotNull(primitive.e5()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().d6(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance_1())), to(PrimitiveClasses_getInstance().g6(), CharArraySerializer()), to(PrimitiveClasses_getInstance().b6(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().m6(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().a6(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().l6(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().k6(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_2())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().z5(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().j6(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_3())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().y5(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().i6(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_4())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().x5(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().h6(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_5())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().w5(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().f6(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().v5(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).ev = function (_this__u8e3s4, index) {
    return this.gv(this.fv(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).gv = function (nestedName) {
    var tmp0_elvis_lhs = this.jv();
    return this.kv(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).fv = function (descriptor, index) {
    return descriptor.pf(index);
  };
  protoOf(NamedValueDecoder).kv = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.yv(tag);
    var r = block();
    if (!$this.iv_1) {
      $this.zv();
    }
    $this.iv_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ch($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.pg() ? this$0.ch($deserializer, $previousValue) : this$0.qg();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.hv_1 = ArrayList_init_$Create$_0();
    this.iv_1 = false;
  }
  protoOf(TaggedDecoder).th = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).lv = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).mv = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).nv = function (tag) {
    var tmp = this.lv(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ov = function (tag) {
    var tmp = this.lv(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).pv = function (tag) {
    var tmp = this.lv(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).qv = function (tag) {
    var tmp = this.lv(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).rv = function (tag) {
    var tmp = this.lv(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).sv = function (tag) {
    var tmp = this.lv(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).tv = function (tag) {
    var tmp = this.lv(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).uv = function (tag) {
    var tmp = this.lv(tag);
    return tmp instanceof Char ? tmp.n7_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).vv = function (tag) {
    var tmp = this.lv(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).wv = function (tag, enumDescriptor) {
    var tmp = this.lv(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).xv = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.yv(tag);
    return this;
  };
  protoOf(TaggedDecoder).ch = function (deserializer, previousValue) {
    return this.dh(deserializer);
  };
  protoOf(TaggedDecoder).bh = function (descriptor) {
    return this.xv(this.zv(), descriptor);
  };
  protoOf(TaggedDecoder).pg = function () {
    var tmp0_elvis_lhs = this.jv();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.mv(currentTag);
  };
  protoOf(TaggedDecoder).qg = function () {
    return null;
  };
  protoOf(TaggedDecoder).rg = function () {
    return this.nv(this.zv());
  };
  protoOf(TaggedDecoder).sg = function () {
    return this.ov(this.zv());
  };
  protoOf(TaggedDecoder).tg = function () {
    return this.pv(this.zv());
  };
  protoOf(TaggedDecoder).ug = function () {
    return this.qv(this.zv());
  };
  protoOf(TaggedDecoder).vg = function () {
    return this.rv(this.zv());
  };
  protoOf(TaggedDecoder).wg = function () {
    return this.sv(this.zv());
  };
  protoOf(TaggedDecoder).xg = function () {
    return this.tv(this.zv());
  };
  protoOf(TaggedDecoder).yg = function () {
    return this.uv(this.zv());
  };
  protoOf(TaggedDecoder).zg = function () {
    return this.vv(this.zv());
  };
  protoOf(TaggedDecoder).ah = function (enumDescriptor) {
    return this.wv(this.zv(), enumDescriptor);
  };
  protoOf(TaggedDecoder).eh = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).fh = function (descriptor) {
  };
  protoOf(TaggedDecoder).gh = function (descriptor, index) {
    return this.nv(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).hh = function (descriptor, index) {
    return this.ov(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).ih = function (descriptor, index) {
    return this.pv(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).jh = function (descriptor, index) {
    return this.qv(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).kh = function (descriptor, index) {
    return this.rv(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).lh = function (descriptor, index) {
    return this.sv(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).mh = function (descriptor, index) {
    return this.tv(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).nh = function (descriptor, index) {
    return this.uv(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).oh = function (descriptor, index) {
    return this.vv(this.ev(descriptor, index));
  };
  protoOf(TaggedDecoder).ph = function (descriptor, index) {
    return this.xv(this.ev(descriptor, index), descriptor.nf(index));
  };
  protoOf(TaggedDecoder).qh = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ev(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).sh = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.ev(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).jv = function () {
    return lastOrNull(this.hv_1);
  };
  protoOf(TaggedDecoder).yv = function (name) {
    this.hv_1.m(name);
  };
  protoOf(TaggedDecoder).zv = function () {
    var r = this.hv_1.c1(get_lastIndex_0(this.hv_1));
    this.iv_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.aw_1 = key;
    this.bw_1 = value;
  }
  protoOf(MapEntry).v2 = function () {
    return this.aw_1;
  };
  protoOf(MapEntry).l3 = function () {
    return this.bw_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + this.aw_1 + ', value=' + this.bw_1 + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.aw_1 == null ? 0 : hashCode(this.aw_1);
    result = imul(result, 31) + (this.bw_1 == null ? 0 : hashCode(this.bw_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.aw_1, tmp0_other_with_cast.aw_1))
      return false;
    if (!equals(this.bw_1, tmp0_other_with_cast.bw_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.oe('key', $keySerializer.de());
      $this$buildSerialDescriptor.oe('value', $valueSerializer.de());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.ew_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).de = function () {
    return this.ew_1;
  };
  protoOf(MapEntrySerializer_0).fw = function (_this__u8e3s4) {
    return _this__u8e3s4.v2();
  };
  protoOf(MapEntrySerializer_0).gw = function (_this__u8e3s4) {
    return this.fw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).hw = function (_this__u8e3s4) {
    return _this__u8e3s4.l3();
  };
  protoOf(MapEntrySerializer_0).iw = function (_this__u8e3s4) {
    return this.hw((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).jw = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.oe('first', $keySerializer.de());
      $this$buildClassSerialDescriptor.oe('second', $valueSerializer.de());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.pw_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).de = function () {
    return this.pw_1;
  };
  protoOf(PairSerializer_0).qw = function (_this__u8e3s4) {
    return _this__u8e3s4.ia_1;
  };
  protoOf(PairSerializer_0).gw = function (_this__u8e3s4) {
    return this.qw(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).rw = function (_this__u8e3s4) {
    return _this__u8e3s4.ja_1;
  };
  protoOf(PairSerializer_0).iw = function (_this__u8e3s4) {
    return this.rw(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).jw = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.rh($this.vw_1, 0, $this.sw_1);
    var b = composite.rh($this.vw_1, 1, $this.tw_1);
    var c = composite.rh($this.vw_1, 2, $this.uw_1);
    composite.fh($this.vw_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.vh($this.vw_1);
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.rh($this.vw_1, 0, $this.sw_1);
        } else {
          if (index === 1) {
            b = composite.rh($this.vw_1, 1, $this.tw_1);
          } else {
            if (index === 2) {
              c = composite.rh($this.vw_1, 2, $this.uw_1);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.fh($this.vw_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : !(a == null)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : !(b == null)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : !(c == null)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.oe('first', this$0.sw_1.de());
      $this$buildClassSerialDescriptor.oe('second', this$0.tw_1.de());
      $this$buildClassSerialDescriptor.oe('third', this$0.uw_1.de());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.sw_1 = aSerializer;
    this.tw_1 = bSerializer;
    this.uw_1 = cSerializer;
    var tmp = this;
    tmp.vw_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).de = function () {
    return this.vw_1;
  };
  protoOf(TripleSerializer_0).ww = function (encoder, value) {
    var structuredEncoder = encoder.eh(this.vw_1);
    structuredEncoder.vi(this.vw_1, 0, this.sw_1, value.ic_1);
    structuredEncoder.vi(this.vw_1, 1, this.tw_1, value.jc_1);
    structuredEncoder.vi(this.vw_1, 2, this.uw_1, value.kc_1);
    structuredEncoder.fh(this.vw_1);
  };
  protoOf(TripleSerializer_0).ee = function (encoder, value) {
    return this.ww(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).fe = function (decoder) {
    var composite = decoder.eh(this.vw_1);
    if (composite.uh()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.kw_1 = keySerializer;
    this.lw_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).mw = function (encoder, value) {
    var structuredEncoder = encoder.eh(this.de());
    structuredEncoder.vi(this.de(), 0, this.kw_1, this.gw(value));
    structuredEncoder.vi(this.de(), 1, this.lw_1, this.iw(value));
    structuredEncoder.fh(this.de());
  };
  protoOf(KeyValueSerializer).ee = function (encoder, value) {
    return this.mw(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(KeyValueSerializer).fe = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.de();
    var composite = decoder.eh(descriptor);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.KeyValueSerializer.deserialize.<anonymous>' call
      if (composite.uh()) {
        var key = composite.rh(this.de(), 0, this.kw_1);
        var value = composite.rh(this.de(), 1, this.lw_1);
        tmp$ret$0 = this.jw(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.vh(this.de());
        if (idx === -1) {
          break mainLoop;
        } else {
          if (idx === 0) {
            key_0 = composite.rh(this.de(), 0, this.kw_1);
          } else {
            if (idx === 1) {
              value_0 = composite.rh(this.de(), 1, this.lw_1);
            } else {
              throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
            }
          }
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      var tmp = (key_0 == null ? true : !(key_0 == null)) ? key_0 : THROW_CCE();
      tmp$ret$0 = this.jw(tmp, (value_0 == null ? true : !(value_0 == null)) ? value_0 : THROW_CCE());
    }
    var result = tmp$ret$0;
    composite.fh(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.xw_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).de = function () {
    return this.xw_1;
  };
  protoOf(ULongSerializer).yw = function (encoder, value) {
    var tmp = encoder.ki(this.xw_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.ei(tmp$ret$0);
  };
  protoOf(ULongSerializer).ee = function (encoder, value) {
    return this.yw(encoder, value instanceof ULong ? value.ld_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).zw = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.bh(this.xw_1).vg();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).fe = function (decoder) {
    return new ULong(this.zw(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.ax_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).de = function () {
    return this.ax_1;
  };
  protoOf(UIntSerializer).bx = function (encoder, value) {
    var tmp = encoder.ki(this.ax_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.di(tmp$ret$0);
  };
  protoOf(UIntSerializer).ee = function (encoder, value) {
    return this.bx(encoder, value instanceof UInt ? value.ad_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).cx = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.bh(this.ax_1).ug();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).fe = function (decoder) {
    return new UInt(this.cx(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.dx_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).de = function () {
    return this.dx_1;
  };
  protoOf(UShortSerializer).ex = function (encoder, value) {
    var tmp = encoder.ki(this.dx_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.ci(tmp$ret$0);
  };
  protoOf(UShortSerializer).ee = function (encoder, value) {
    return this.ex(encoder, value instanceof UShort ? value.wd_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).fx = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.bh(this.dx_1).tg();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).fe = function (decoder) {
    return new UShort(this.fx(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.gx_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).de = function () {
    return this.gx_1;
  };
  protoOf(UByteSerializer).hx = function (encoder, value) {
    var tmp = encoder.ki(this.gx_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.bi(tmp$ret$0);
  };
  protoOf(UByteSerializer).ee = function (encoder, value) {
    return this.hx(encoder, value instanceof UByte ? value.pc_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).ix = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.bh(this.gx_1).sg();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).fe = function (decoder) {
    return new UByte(this.ix(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).af = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ze(kClass, typeArgumentsSerializers) : $super.ze.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.kx_1 = class2ContextualFactory;
    this.lx_1 = polyBase2Serializers;
    this.mx_1 = polyBase2DefaultSerializerProvider;
    this.nx_1 = polyBase2NamedSerializers;
    this.ox_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).fj = function (baseClass, value) {
    if (!baseClass.f5(value))
      return null;
    var tmp0_safe_receiver = this.lx_1.s1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.mx_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).ej = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.nx_1.s1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, Map) ? tmp0_safe_receiver : THROW_CCE()).s1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.ox_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ze = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.kx_1.s1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.px(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).jx = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.kx_1.t1().p();
    while (tmp0_iterator.q()) {
      var element = tmp0_iterator.r();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.v2();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.l3();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.sx_1;
        collector.tx(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.rx(kclass, serial.qx_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.lx_1.t1().p();
    while (tmp0_iterator_0.q()) {
      var element_0 = tmp0_iterator_0.r();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.v2();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.l3();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_1 = classMap.t1().p();
      while (tmp0_iterator_1.q()) {
        var element_1 = tmp0_iterator_1.r();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.v2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.l3();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.ux(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_2 = this.mx_1.t1().p();
    while (tmp0_iterator_2.q()) {
      var element_2 = tmp0_iterator_2.r();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.v2();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.l3();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.vx(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_3 = this.ox_1.t1().p();
    while (tmp0_iterator_3.q()) {
      var element_3 = tmp0_iterator_3.r();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.v2();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.l3();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.wx(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.xx_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.xx_1.equals(tmp0_other_with_cast.xx_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.xx_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.xx_1 + ')';
  };
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().v5()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().c6());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.rp(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function createCache$1($factory) {
    this.yx_1 = $factory;
  }
  protoOf(createCache$1).bf = function (key) {
    return this.yx_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.zx_1 = $factory;
  }
  protoOf(createParametrizedCache$1).cf = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'kotlinx.serialization.internal.<no name provided>.get.<anonymous>' call
      var value = this.zx_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).df = get_isNullable;
  protoOf(SerialDescriptorImpl).kf = get_isInline;
  protoOf(AbstractDecoder).rh = decodeSerializableElement$default;
  protoOf(AbstractDecoder).dh = decodeSerializableValue;
  protoOf(AbstractDecoder).uh = decodeSequentially;
  protoOf(AbstractDecoder).wh = decodeCollectionSize;
  protoOf(AbstractEncoder).zi = encodeNotNullMark;
  protoOf(AbstractEncoder).aj = beginCollection;
  protoOf(AbstractEncoder).wi = encodeSerializableValue;
  protoOf(AbstractEncoder).yi = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).bj = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).df = get_isNullable;
  protoOf(ListLikeDescriptor).kf = get_isInline;
  protoOf(ListLikeDescriptor).if = get_annotations;
  protoOf(MapLikeDescriptor).df = get_isNullable;
  protoOf(MapLikeDescriptor).kf = get_isInline;
  protoOf(MapLikeDescriptor).if = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).df = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).kf = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).hp = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).df = get_isNullable;
  protoOf(NothingSerialDescriptor).kf = get_isInline;
  protoOf(NothingSerialDescriptor).if = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).df = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).kf = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).if = get_annotations;
  protoOf(TaggedDecoder).rh = decodeSerializableElement$default;
  protoOf(TaggedDecoder).dh = decodeSerializableValue;
  protoOf(TaggedDecoder).uh = decodeSequentially;
  protoOf(TaggedDecoder).wh = decodeCollectionSize;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SerializationException_init_$Init$_0;
  _.$_$.b = SerializationException_init_$Create$_0;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = SEALED_getInstance;
  _.$_$.e = STRING_getInstance;
  _.$_$.f = CONTEXTUAL_getInstance;
  _.$_$.g = ENUM_getInstance;
  _.$_$.h = CLASS_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = Companion_instance_0;
  _.$_$.l = BooleanSerializer_getInstance;
  _.$_$.m = IntSerializer_getInstance;
  _.$_$.n = StringSerializer_getInstance;
  _.$_$.o = ListSerializer;
  _.$_$.p = MapSerializer;
  _.$_$.q = get_nullable;
  _.$_$.r = serializer_0;
  _.$_$.s = serializer_9;
  _.$_$.t = serializer_7;
  _.$_$.u = serializer_11;
  _.$_$.v = serializer_5;
  _.$_$.w = PolymorphicKind;
  _.$_$.x = PrimitiveKind;
  _.$_$.y = PrimitiveSerialDescriptor;
  _.$_$.z = get_annotations;
  _.$_$.a1 = get_isInline;
  _.$_$.b1 = get_isNullable;
  _.$_$.c1 = SerialDescriptor;
  _.$_$.d1 = ENUM;
  _.$_$.e1 = buildSerialDescriptor;
  _.$_$.f1 = getContextualDescriptor;
  _.$_$.g1 = AbstractDecoder;
  _.$_$.h1 = AbstractEncoder;
  _.$_$.i1 = CompositeDecoder;
  _.$_$.j1 = CompositeEncoder;
  _.$_$.k1 = Decoder;
  _.$_$.l1 = Encoder;
  _.$_$.m1 = AbstractPolymorphicSerializer;
  _.$_$.n1 = ArrayListSerializer;
  _.$_$.o1 = ElementMarker;
  _.$_$.p1 = typeParametersSerializers;
  _.$_$.q1 = GeneratedSerializer;
  _.$_$.r1 = InlinePrimitiveDescriptor;
  _.$_$.s1 = LinkedHashMapSerializer;
  _.$_$.t1 = NamedValueDecoder;
  _.$_$.u1 = PluginGeneratedSerialDescriptor;
  _.$_$.v1 = SerializerFactory;
  _.$_$.w1 = createSimpleEnumSerializer;
  _.$_$.x1 = jsonCachedSerialNames;
  _.$_$.y1 = throwMissingFieldException;
  _.$_$.z1 = EmptySerializersModule_0;
  _.$_$.a2 = contextual;
  _.$_$.b2 = SerializersModuleCollector;
  _.$_$.c2 = DeserializationStrategy;
  _.$_$.d2 = KSerializer;
  _.$_$.e2 = MissingFieldException;
  _.$_$.f2 = SealedClassSerializer;
  _.$_$.g2 = SerializationException;
  _.$_$.h2 = findPolymorphicSerializer;
  _.$_$.i2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
