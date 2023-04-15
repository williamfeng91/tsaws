/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * The country from which web requests originate that you want AWS WAF to search for.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-geomatchset-geomatchconstraint.html}
 **/
export interface WAFRegionalGeoMatchSetGeoMatchConstraint {
  /**
   * The type of geographical area you want AWS WAF to search for. Currently `Country` is the only valid value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Country`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The country that you want AWS WAF to search for.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AD | AE | AF | AG | AI | AL | AM | AO | AQ | AR | AS | AT | AU | AW | AX | AZ | BA | BB | BD | BE | BF | BG | BH | BI | BJ | BL | BM | BN | BO | BQ | BR | BS | BT | BV | BW | BY | BZ | CA | CC | CD | CF | CG | CH | CI | CK | CL | CM | CN | CO | CR | CU | CV | CW | CX | CY | CZ | DE | DJ | DK | DM | DO | DZ | EC | EE | EG | EH | ER | ES | ET | FI | FJ | FK | FM | FO | FR | GA | GB | GD | GE | GF | GG | GH | GI | GL | GM | GN | GP | GQ | GR | GS | GT | GU | GW | GY | HK | HM | HN | HR | HT | HU | ID | IE | IL | IM | IN | IO | IQ | IR | IS | IT | JE | JM | JO | JP | KE | KG | KH | KI | KM | KN | KP | KR | KW | KY | KZ | LA | LB | LC | LI | LK | LR | LS | LT | LU | LV | LY | MA | MC | MD | ME | MF | MG | MH | MK | ML | MM | MN | MO | MP | MQ | MR | MS | MT | MU | MV | MW | MX | MY | MZ | NA | NC | NE | NF | NG | NI | NL | NO | NP | NR | NU | NZ | OM | PA | PE | PF | PG | PH | PK | PL | PM | PN | PR | PS | PT | PW | PY | QA | RE | RO | RS | RU | RW | SA | SB | SC | SD | SE | SG | SH | SI | SJ | SK | SL | SM | SN | SO | SR | SS | ST | SV | SX | SY | SZ | TC | TD | TF | TG | TH | TJ | TK | TL | TM | TN | TO | TR | TT | TV | TW | TZ | UA | UG | UM | US | UY | UZ | VA | VC | VE | VG | VI | VN | VU | WF | WS | YE | YT | ZA | ZM | ZW`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}
export interface WAFRegionalGeoMatchSetProperties {
  /**
   * An array of `GeoMatchConstraint` objects, which contain the country that you want AWS WAF to search for.
   *
   * _Required_: No
   *
   * _Type_: List of [GeoMatchConstraint](aws-properties-wafregional-geomatchset-geomatchconstraint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GeoMatchConstraints?: List<WAFRegionalGeoMatchSetGeoMatchConstraint>;
  /**
   * A friendly name or description of the [AWS::WAFRegional::GeoMatchSet](#aws-resource-wafregional-geomatchset). You can't change the name of an `GeoMatchSet` after you create it.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * Contains one or more countries that AWS WAF will search for.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-geomatchset.html}
 */
export interface WAFRegionalGeoMatchSetResource {
  Type: 'AWS::WAFRegional::GeoMatchSet';
  Properties: WAFRegionalGeoMatchSetProperties;
}
