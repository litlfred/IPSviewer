(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['@js-joda/core'], this['kotlin-kotlin-stdlib'], this['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var OffsetDateTime = $module$_js_joda_core_gcv2k.OffsetDateTime;
  var LocalDateTime = $module$_js_joda_core_gcv2k.LocalDateTime;
  var ZoneOffset = $module$_js_joda_core_gcv2k.ZoneOffset;
  var ZoneId = $module$_js_joda_core_gcv2k.ZoneId;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.w;
  var protoOf = kotlin_kotlin.$_$.h7;
  var objectCreate = kotlin_kotlin.$_$.f7;
  var captureStack = kotlin_kotlin.$_$.a6;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.v;
  var IllegalArgumentException = kotlin_kotlin.$_$.z8;
  var classMeta = kotlin_kotlin.$_$.g6;
  var setMetadataFor = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.e;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.f1;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.e1;
  var RuntimeException = kotlin_kotlin.$_$.d9;
  var Long = kotlin_kotlin.$_$.a9;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var THROW_CCE = kotlin_kotlin.$_$.e9;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var objectMeta = kotlin_kotlin.$_$.g7;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h1;
  var indexOf = kotlin_kotlin.$_$.y7;
  var charSequenceLength = kotlin_kotlin.$_$.e6;
  var charSequenceGet = kotlin_kotlin.$_$.d6;
  var numberToInt = kotlin_kotlin.$_$.d7;
  var equals = kotlin_kotlin.$_$.h6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DateTimeFormatException, 'DateTimeFormatException', classMeta, IllegalArgumentException, VOID, DateTimeFormatException_init_$Create$);
  setMetadataFor(DateTimeArithmeticException, 'DateTimeArithmeticException', classMeta, RuntimeException, VOID, DateTimeArithmeticException_init_$Create$);
  setMetadataFor(IllegalTimeZoneException, 'IllegalTimeZoneException', classMeta, IllegalArgumentException, VOID, IllegalTimeZoneException_init_$Create$);
  setMetadataFor(InstantIso8601Serializer, 'InstantIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LocalDateTimeIso8601Serializer, 'LocalDateTimeIso8601Serializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FixedOffsetTimeZoneSerializer, 'FixedOffsetTimeZoneSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(TimeZoneSerializer, 'TimeZoneSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UtcOffsetSerializer, 'UtcOffsetSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Instant_0, 'Instant', classMeta, VOID, VOID, VOID, VOID, {0: InstantIso8601Serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(LocalDateTime_0, 'LocalDateTime', classMeta, VOID, VOID, VOID, VOID, {0: LocalDateTimeIso8601Serializer_getInstance});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(TimeZone, 'TimeZone', classMeta, VOID, VOID, VOID, VOID, {0: TimeZoneSerializer_getInstance});
  setMetadataFor(FixedOffsetTimeZone, 'FixedOffsetTimeZone', classMeta, TimeZone, VOID, VOID, VOID, {0: FixedOffsetTimeZoneSerializer_getInstance});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(UtcOffset, 'UtcOffset', classMeta, VOID, VOID, VOID, VOID, {0: UtcOffsetSerializer_getInstance});
  //endregion
  function DateTimeFormatException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$() {
    var tmp = DateTimeFormatException_init_$Init$(objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException_init_$Init$_0(cause, $this) {
    IllegalArgumentException_init_$Init$_0(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$_0(cause) {
    var tmp = DateTimeFormatException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeFormatException)));
    captureStack(tmp, DateTimeFormatException_init_$Create$_0);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function DateTimeArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$() {
    var tmp = DateTimeArithmeticException_init_$Init$(objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$);
    return tmp;
  }
  function DateTimeArithmeticException_init_$Init$_0(cause, $this) {
    RuntimeException_init_$Init$_0(cause, $this);
    DateTimeArithmeticException.call($this);
    return $this;
  }
  function DateTimeArithmeticException_init_$Create$_0(cause) {
    var tmp = DateTimeArithmeticException_init_$Init$_0(cause, objectCreate(protoOf(DateTimeArithmeticException)));
    captureStack(tmp, DateTimeArithmeticException_init_$Create$_0);
    return tmp;
  }
  function DateTimeArithmeticException() {
    captureStack(this, DateTimeArithmeticException);
  }
  function IllegalTimeZoneException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$() {
    var tmp = IllegalTimeZoneException_init_$Init$(objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$);
    return tmp;
  }
  function IllegalTimeZoneException_init_$Init$_0(cause, $this) {
    IllegalArgumentException_init_$Init$_0(cause, $this);
    IllegalTimeZoneException.call($this);
    return $this;
  }
  function IllegalTimeZoneException_init_$Create$_0(cause) {
    var tmp = IllegalTimeZoneException_init_$Init$_0(cause, objectCreate(protoOf(IllegalTimeZoneException)));
    captureStack(tmp, IllegalTimeZoneException_init_$Create$_0);
    return tmp;
  }
  function IllegalTimeZoneException() {
    captureStack(this, IllegalTimeZoneException);
  }
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function asTimeZone(_this__u8e3s4) {
    return FixedOffsetTimeZone_init_$Create$(_this__u8e3s4);
  }
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.q18_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  protoOf(InstantIso8601Serializer).de = function () {
    return this.q18_1;
  };
  protoOf(InstantIso8601Serializer).fe = function (decoder) {
    return Companion_getInstance().v18(decoder.zg());
  };
  protoOf(InstantIso8601Serializer).w18 = function (encoder, value) {
    encoder.ii(value.toString());
  };
  protoOf(InstantIso8601Serializer).ee = function (encoder, value) {
    return this.w18(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function LocalDateTimeIso8601Serializer() {
    LocalDateTimeIso8601Serializer_instance = this;
    this.x18_1 = PrimitiveSerialDescriptor('LocalDateTime', STRING_getInstance());
  }
  protoOf(LocalDateTimeIso8601Serializer).de = function () {
    return this.x18_1;
  };
  protoOf(LocalDateTimeIso8601Serializer).fe = function (decoder) {
    return Companion_getInstance_0().v18(decoder.zg());
  };
  protoOf(LocalDateTimeIso8601Serializer).a19 = function (encoder, value) {
    encoder.ii(value.toString());
  };
  protoOf(LocalDateTimeIso8601Serializer).ee = function (encoder, value) {
    return this.a19(encoder, value instanceof LocalDateTime_0 ? value : THROW_CCE());
  };
  var LocalDateTimeIso8601Serializer_instance;
  function LocalDateTimeIso8601Serializer_getInstance() {
    if (LocalDateTimeIso8601Serializer_instance == null)
      new LocalDateTimeIso8601Serializer();
    return LocalDateTimeIso8601Serializer_instance;
  }
  function FixedOffsetTimeZoneSerializer() {
    FixedOffsetTimeZoneSerializer_instance = this;
    this.b19_1 = PrimitiveSerialDescriptor('FixedOffsetTimeZone', STRING_getInstance());
  }
  protoOf(FixedOffsetTimeZoneSerializer).de = function () {
    return this.b19_1;
  };
  protoOf(FixedOffsetTimeZoneSerializer).fe = function (decoder) {
    var zone = Companion_getInstance_2().d19(decoder.zg());
    if (zone instanceof FixedOffsetTimeZone) {
      return zone;
    } else {
      throw SerializationException_init_$Create$("Timezone identifier '" + zone + "' does not correspond to a fixed-offset timezone");
    }
  };
  protoOf(FixedOffsetTimeZoneSerializer).e19 = function (encoder, value) {
    encoder.ii(value.g19());
  };
  protoOf(FixedOffsetTimeZoneSerializer).ee = function (encoder, value) {
    return this.e19(encoder, value instanceof FixedOffsetTimeZone ? value : THROW_CCE());
  };
  var FixedOffsetTimeZoneSerializer_instance;
  function FixedOffsetTimeZoneSerializer_getInstance() {
    if (FixedOffsetTimeZoneSerializer_instance == null)
      new FixedOffsetTimeZoneSerializer();
    return FixedOffsetTimeZoneSerializer_instance;
  }
  function TimeZoneSerializer() {
    TimeZoneSerializer_instance = this;
    this.h19_1 = PrimitiveSerialDescriptor('TimeZone', STRING_getInstance());
  }
  protoOf(TimeZoneSerializer).de = function () {
    return this.h19_1;
  };
  protoOf(TimeZoneSerializer).fe = function (decoder) {
    return Companion_getInstance_2().d19(decoder.zg());
  };
  protoOf(TimeZoneSerializer).i19 = function (encoder, value) {
    encoder.ii(value.g19());
  };
  protoOf(TimeZoneSerializer).ee = function (encoder, value) {
    return this.i19(encoder, value instanceof TimeZone ? value : THROW_CCE());
  };
  var TimeZoneSerializer_instance;
  function TimeZoneSerializer_getInstance() {
    if (TimeZoneSerializer_instance == null)
      new TimeZoneSerializer();
    return TimeZoneSerializer_instance;
  }
  function UtcOffsetSerializer() {
    UtcOffsetSerializer_instance = this;
    this.j19_1 = PrimitiveSerialDescriptor('UtcOffset', STRING_getInstance());
  }
  protoOf(UtcOffsetSerializer).de = function () {
    return this.j19_1;
  };
  protoOf(UtcOffsetSerializer).fe = function (decoder) {
    return Companion_getInstance_3().v18(decoder.zg());
  };
  protoOf(UtcOffsetSerializer).l19 = function (encoder, value) {
    encoder.ii(value.toString());
  };
  protoOf(UtcOffsetSerializer).ee = function (encoder, value) {
    return this.l19(encoder, value instanceof UtcOffset ? value : THROW_CCE());
  };
  var UtcOffsetSerializer_instance;
  function UtcOffsetSerializer_getInstance() {
    if (UtcOffsetSerializer_instance == null)
      new UtcOffsetSerializer();
    return UtcOffsetSerializer_instance;
  }
  function fixOffsetRepresentation($this, isoString) {
    var time = indexOf(isoString, _Char___init__impl__6a9atx(84), VOID, true);
    if (time === -1)
      return isoString;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable = charSequenceLength(isoString) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlinx.datetime.Companion.fixOffsetRepresentation.<anonymous>' call
          var c = charSequenceGet(isoString, index);
          if (c === _Char___init__impl__6a9atx(43) ? true : c === _Char___init__impl__6a9atx(45)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    var offset = tmp$ret$1;
    if (offset < time)
      return isoString;
    var separator = indexOf(isoString, _Char___init__impl__6a9atx(58), offset);
    return !(separator === -1) ? isoString : isoString + ':00';
  }
  function Companion() {
    Companion_instance = this;
    this.r18_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.s18_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.t18_1 = new Instant_0(Instant.MIN);
    this.u18_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion).v18 = function (isoString) {
    var tmp;
    try {
      tmp = new Instant_0(OffsetDateTime.parse(fixOffsetRepresentation(this, isoString)).toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Instant_0(value) {
    Companion_getInstance();
    this.m19_1 = value;
  }
  protoOf(Instant_0).n19 = function (other) {
    return numberToInt(this.m19_1.compareTo(other.m19_1));
  };
  protoOf(Instant_0).z7 = function (other) {
    return this.n19(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals(this.m19_1, other.m19_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return numberToInt(this.m19_1.hashCode());
  };
  protoOf(Instant_0).toString = function () {
    return this.m19_1.toString();
  };
  function isJodaDateTimeException(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == 'DateTimeException';
  }
  function isJodaDateTimeParseException(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.name == 'DateTimeParseException';
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.y18_1 = new LocalDateTime_0(LocalDateTime.MIN);
    this.z18_1 = new LocalDateTime_0(LocalDateTime.MAX);
  }
  protoOf(Companion_0).v18 = function (isoString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalDateTime.parse(isoString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDateTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeParseException(e))
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LocalDateTime_0(value) {
    Companion_getInstance_0();
    this.o19_1 = value;
  }
  protoOf(LocalDateTime_0).p19 = function () {
    return numberToInt(this.o19_1.year());
  };
  protoOf(LocalDateTime_0).q19 = function () {
    return numberToInt(this.o19_1.monthValue());
  };
  protoOf(LocalDateTime_0).r19 = function () {
    return numberToInt(this.o19_1.dayOfMonth());
  };
  protoOf(LocalDateTime_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof LocalDateTime_0) {
        tmp_0 = equals(this.o19_1, other.o19_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LocalDateTime_0).hashCode = function () {
    return numberToInt(this.o19_1.hashCode());
  };
  protoOf(LocalDateTime_0).toString = function () {
    return this.o19_1.toString();
  };
  protoOf(LocalDateTime_0).s19 = function (other) {
    return numberToInt(this.o19_1.compareTo(other.o19_1));
  };
  protoOf(LocalDateTime_0).z7 = function (other) {
    return this.s19(other instanceof LocalDateTime_0 ? other : THROW_CCE());
  };
  function toLocalDateTime(_this__u8e3s4, timeZone) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = LocalDateTime.ofInstant(_this__u8e3s4.m19_1, timeZone.f19_1);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new LocalDateTime_0(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeArithmeticException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function FixedOffsetTimeZone_init_$Init$(offset, $this) {
    FixedOffsetTimeZone.call($this, offset, offset.t19_1);
    return $this;
  }
  function FixedOffsetTimeZone_init_$Create$(offset) {
    return FixedOffsetTimeZone_init_$Init$(offset, objectCreate(protoOf(FixedOffsetTimeZone)));
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function FixedOffsetTimeZone(offset, zoneId) {
    TimeZone.call(this, zoneId);
    this.v19_1 = offset;
  }
  function ofZone($this, zoneId) {
    var tmp;
    if (zoneId instanceof ZoneOffset) {
      tmp = FixedOffsetTimeZone_init_$Create$(new UtcOffset(zoneId));
    } else {
      if (zoneId.rules().isFixedOffset()) {
        var tmp_0 = zoneId.normalized();
        tmp = new FixedOffsetTimeZone(new UtcOffset(tmp_0 instanceof ZoneOffset ? tmp_0 : THROW_CCE()), zoneId);
      } else {
        tmp = new TimeZone(zoneId);
      }
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.c19_1 = asTimeZone(new UtcOffset(ZoneOffset.UTC));
  }
  protoOf(Companion_2).d19 = function (zoneId) {
    var tmp;
    try {
      tmp = ofZone(this, ZoneId.of(zoneId));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw IllegalTimeZoneException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function TimeZone(zoneId) {
    Companion_getInstance_2();
    this.f19_1 = zoneId;
  }
  protoOf(TimeZone).g19 = function () {
    return this.f19_1.id();
  };
  protoOf(TimeZone).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof TimeZone) {
        tmp_0 = equals(this.f19_1, other.f19_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(TimeZone).hashCode = function () {
    return numberToInt(this.f19_1.hashCode());
  };
  protoOf(TimeZone).toString = function () {
    return this.f19_1.toString();
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.k19_1 = new UtcOffset(ZoneOffset.UTC);
  }
  protoOf(Companion_3).v18 = function (offsetString) {
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var this_0 = ZoneOffset.of(offsetString);
      // Inline function 'kotlin.contracts.contract' call
      tmp = new UtcOffset(this_0);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        if (isJodaDateTimeException(e))
          throw DateTimeFormatException_init_$Create$_0(e);
        throw e;
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function UtcOffset(zoneOffset) {
    Companion_getInstance_3();
    this.t19_1 = zoneOffset;
  }
  protoOf(UtcOffset).hashCode = function () {
    return numberToInt(this.t19_1.hashCode());
  };
  protoOf(UtcOffset).equals = function (other) {
    var tmp;
    if (other instanceof UtcOffset) {
      tmp = equals(this.t19_1, other.t19_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(UtcOffset).toString = function () {
    return this.t19_1.toString();
  };
  //region block: init
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  Companion_instance_1 = new Companion_1();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance;
  _.$_$.b = Companion_getInstance_2;
  _.$_$.c = toLocalDateTime;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-js-ir.js.map
