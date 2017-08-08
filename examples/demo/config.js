import React from 'react';
import {Widgets, Operators} from 'react-awesome-query-builder';
const {
    TextWidget,
    NumberWidget,
    SelectWidget,
    MultiSelectWidget,
    DateWidget,
    BooleanWidget,
    TimeWidget,
    DateTimeWidget
} = Widgets;
const {ProximityOperator} = Operators;
import moment from 'moment';

export default {
    conjunctions: {
        AND: {
            label: 'And',
            formatConj: (children, conj, isForDisplay) => {
                return children.size > 1 ? 
                    '(' + children.join(' '+ (isForDisplay ? "AND" : "&&") +' ') + ')' 
                    : children.first();
            },
        },
        OR: {
            label: 'Or',
            formatConj: (children, conj, isForDisplay) => {
                return children.size > 1 ? 
                    '(' + children.join(' '+ (isForDisplay ? "OR" : "||") +' ') + ')' 
                    : children.first();
            },
        },
    },
    fields: {
        members: {
            label: 'Members',
            type: '!struct',
            subfields: {
                subname: {
                    //label: 'Subname', //'subname' should be used instead
                    label2: 'MemberName',
                    type: 'text',
                    operators: ['proximity'],
                },
            }
        },
        name: {
            label: 'Name',
            type: 'text',
            operators: ['equal'],
            defaultOperator: 'not_equal',
        },
        name2: {
            label: 'Name 2',
            type: 'text',
            operators: ['equal', 'not_equal'],
            defaultOperator: 'not_equal',
            // widgetProps: {..}  - same as widgets: { text: { widgetProps: {..} } }
            widgetProps: {
                formatValue: (val, fieldDef, wgtDef, isForDisplay) => ("__"+JSON.stringify(val)),
                valueLabel: "Name2",
                valuePlaceholder: "Enter name2",
            }
        },
        num: {
            label: 'Number',
            type: 'number',
            fieldSettings: {
                min: 2,
                max: 5
            },
        },
        date: {
            label: 'Date',
            type: 'date',
            operators: ['greater', 'less'],
            defaultOperator: 'less',
        },
        time: {
            label: 'Time',
            type: 'time',
            operators: ['greater_or_equal', 'less_or_equal', 'between'],
            defaultOperator: 'between',
            widgets: {
                time: {
                    opProps: {
                        between: {
                            valueLabels: [
                                'Time from', 
                                'Time to'
                            ],
                        },
                    },
                    widgetProps: {
                        timeFormat: 'h:mm:ss A',
                        use12Hours: true,
                    },
                },
            },
        },
        datetime: {
            label: 'DateTime',
            type: 'datetime',
        },
        color: {
            label: 'Color',
            type: 'select',
            operators: [
                'select_equals',
                'select_not_equals',
                'select_any_in',
                'select_not_any_in'
            ],
            listValues: {
                yellow: 'Yellow',
                green: 'Green',
                orange: 'Orange'
            },
        },
        color2: {
            label: 'Color2',
            type: 'select',
            defaultOperator: 'select_not_any_in',
            operators: [
                'select_not_equals',
                'select_not_any_in'
            ],
            listValues: {
                yellow: 'Yellow',
                green: 'Green',
                orange: 'Orange'
            },
        },
        multicolor: {
            label: 'Colors',
            type: 'multiselect',
            listValues: {
                yellow: 'Yellow',
                green: 'Green',
                orange: 'Orange'
            },
        },
        stock: {
            label: 'In stock',
            type: 'boolean',
        },
    },
    types: {
        text: {
            widgets: {
                text: {
                    defaultOperator: 'is_empty',
                    operators: [
                        'equal',
                        'not_equal',
                        "is_empty",
                        "is_not_empty",
                        'proximity'
                    ],
                    widgetProps: {
                        formatValue: (val, fieldDef, wgtDef, isForDisplay) => ("_"+JSON.stringify(val)),
                        valueLabel: "Text",
                        valuePlaceholder: "Enter text",
                    }
                }
            },
        },
        number: {
            widgets: {
                number: {
                    operators: [
                        "equal",
                        "not_equal",
                        "less",
                        "less_or_equal",
                        "greater",
                        "greater_or_equal",
                        "between",
                        "not_between",
                    ],
                    defaultOperator: 'less',
                    widgetProps: {
                        valueLabel: "Number2",
                        valuePlaceholder: "Enter number2",
                    }
                }
            },
        },
        date: {
            widgets: {
                date: {
                    operators: [
                        "equal",
                        "not_equal",
                        "less",
                        "less_or_equal",
                        "greater",
                        "greater_or_equal",
                        "between",
                        "not_between",
                        "is_empty",
                        "is_not_empty",
                    ]
                }
            },
        },
        time: {
            widgets: {
                time: {
                    operators: [
                        "equal",
                        "not_equal",
                        "less",
                        "less_or_equal",
                        "greater",
                        "greater_or_equal",
                        "between",
                        "not_between",
                        "is_empty",
                        "is_not_empty",
                    ]
                }
            },
        },
        datetime: {
            widgets: {
                datetime: {
                    operators: [
                        "equal",
                        "not_equal",
                        "less",
                        "less_or_equal",
                        "greater",
                        "greater_or_equal",
                        "between",
                        "not_between",
                        "is_empty",
                        "is_not_empty",
                    ],
                    opProps: {
                        between: {
                            valueLabels: [
                                {label: 'Date from', placeholder: 'Enrer datetime from'},
                                {label: 'Date to', placeholder: 'Enter datetime to'},
                            ],
                        },
                    },
                    widgetProps: {
                        timeFormat: 'HH:mm',
                        dateFormat: 'YYYY-MM-DD',
                        valueFormat: 'YYYY-MM-DD HH:mm',
                    }
                }
            },
        },
        select: {
            widgets: {
                select: {
                    operators: [
                        'select_equals',
                        'select_not_equals'
                    ],
                    widgetProps: {
                    },
                },
                multiselect: {
                    operators: [
                        'select_any_in',
                        'select_not_any_in'
                    ],
                    widgetProps: {
                    },
                }
            },
        },
        multiselect: {
            widgets: {
                multiselect: {
                    operators: [
                        'multiselect_equals',
                        'multiselect_not_equals',
                    ]
                }
            },
        },
        boolean: {
            widgets: {
                boolean: {
                    operators: [
                        "equal",
                    ],
                    widgetProps: {
                        hideOperator: true,
                        operatorInlineLabel: "is",
                    }
                }
            },
        },
    },
    operators: {
        equal: {
            label: '==',
            labelForFormat: '==',
            reversedOp: 'not_equal',
        },
        not_equal: {
            label: '!=',
            labelForFormat: '!=',
            reversedOp: 'equal',
        },
        less: {
            label: '<',
            labelForFormat: '<',
            reversedOp: 'greater_or_equal',
        },
        less_or_equal: {
            label: '<=',
            labelForFormat: '<=',
            reversedOp: 'greater',
        },
        greater: {
            label: '>',
            labelForFormat: '>',
            reversedOp: 'less_or_equal',
        },
        greater_or_equal: {
            label: '>=',
            labelForFormat: '>=',
            reversedOp: 'less',
        },

        between: {
            label: 'Between',
            labelForFormat: 'BETWEEN',
            cardinality: 2,
            formatOp: (field, op, values, fieldDef, opDef, operatorOptions, isForDisplay) => {
                let valFrom = values.first();
                let valTo = values.get(1);
                if (isForDisplay)
                    return `${field} >= ${valFrom} AND ${field} <= ${valTo}`;
                else
                    return `${field} >= ${valFrom} && ${field} <= ${valTo}`;
            },
            valueLabels: [
                'Value from', 
                'Value to'
            ],
            textSeparators: [
                null,
                'and'
            ],
            reversedOp: 'not_between',
        },
        not_between: {
            label: 'Not between',
            labelForFormat: 'NOT BETWEEN',
            cardinality: 2,
            reversedOp: 'between',
            valueLabels: [
                'Value from', 
                'Value to'
            ],
            textSeparators: [
                null,
                'and'
            ],
            reversedOp: 'between',
        },

        is_empty: {
            label: 'Is Empty',
            labelForFormat: 'IS EMPTY',
            cardinality: 0,
            reversedOp: 'is_not_empty',
            formatOp: (field, op, value, fieldDef, opDef, operatorOptions, isForDisplay) => {
                return isForDisplay ? `${field} IS EMPTY` : `!${field}`;
            },
        },
        is_not_empty: {
            label: 'Is not empty',
            labelForFormat: 'IS NOT EMPTY',
            cardinality: 0,
            reversedOp: 'is_empty',
            formatOp: (field, op, value, fieldDef, opDef, operatorOptions, isForDisplay) => {
                return isForDisplay ? `${field} IS NOT EMPTY` : `!!${field}`;
            },
        },
        select_equals: {
            label: '==',
            labelForFormat: '==',
            formatOp: (field, op, value, fieldDef, opDef, operatorOptions, isForDisplay) => {
                return `${field} == ${value}`;
            },
            reversedOp: 'select_not_equals',
        },
        select_not_equals: {
            label: '!=',
            labelForFormat: '!=',
            formatOp: (field, op, value, fieldDef, opDef, operatorOptions, isForDisplay) => {
                return `${field} != ${value}`;
            },
            reversedOp: 'select_equals',
        },
        select_any_in: {
            label: 'Any in',
            labelForFormat: 'IN',
            formatOp: (field, op, values, fieldDef, opDef, operatorOptions, isForDisplay) => {
                return `${field} IN (${values.join(', ')})`;
            },
            reversedOp: 'select_not_any_in',
        },
        select_not_any_in: {
            label: 'Not in',
            labelForFormat: 'NOT IN',
            formatOp: (field, op, values, fieldDef, opDef, operatorOptions, isForDisplay) => {
                return `${field} NOT IN (${values.join(', ')})`;
            },
            reversedOp: 'select_any_in',
        },
        multiselect_equals: {
            label: 'Equals',
            labelForFormat: '==',
            formatOp: (field, op, values, fieldDef, opDef, operatorOptions, isForDisplay) => {
                return `${field} == (${values.join(', ')})`;
            },
            reversedOp: 'multiselect_not_equals',
        },
        multiselect_not_equals: {
            label: 'Not equals',
            labelForFormat: '!=',
            formatOp: (field, op, values, fieldDef, opDef, operatorOptions, isForDisplay) => {
                return `${field} != (${values.join(', ')})`;
            },
            reversedOp: 'multiselect_equals',
        },

        proximity: {
          label: 'Proximity search',
          cardinality: 2,
          valueLabels: [
            {label: 'Word 1', placeholder: 'Enter first word'},
            'Word 2'
          ],
          formatOp: (field, op, values, fieldDef, opDef, operatorOptions, isForDisplay) => {
            let val1 = values.first();
            let val2 = values.get(1);
            return `${field} ${val1} NEAR/${operatorOptions.get('proximity')} ${val2}`;
          },
          options: {
            optionLabel: "Words between",
            optionPlaceholder: "Select words between",
            factory: (props) => <ProximityOperator {...props} />,
            defaults: {
              proximity: 2
            }
          }
        },
    },
    widgets: {
        text: {
            factory: (props) => <TextWidget {...props} />,
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                return isForDisplay ? '"'+val+'"' : JSON.stringify(val);
            },
        },
        number: {
            factory: (props) => <NumberWidget {...props} />,
            valueLabel: "Number",
            valuePlaceholder: "Enter number",
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                return isForDisplay ? val : JSON.stringify(val);
            },
        },
        select: {
            factory: (props) => <SelectWidget {...props} />,
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                let valLabel = fieldDef.listValues[val];
                return isForDisplay ? '"'+valLabel+'"' : JSON.stringify(val);
            },
        },
        multiselect: {
            factory: (props) => <MultiSelectWidget {...props} />,
            formatValue: (vals, fieldDef, wgtDef, isForDisplay) => {
                let valsLabels = vals.map(v => fieldDef.listValues[v]);
                return isForDisplay ? valsLabels.map(v => '"'+v+'"') : vals.map(v => JSON.stringify(v));
            },
        },
        date: {
            factory: (props) => <DateWidget {...props} />,
            dateFormat: 'DD.MM.YYYY',
            valueFormat: 'YYYY-MM-DD',
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                let dateVal = moment(val, wgtDef.valueFormat);
                return isForDisplay ? '"'+dateVal.format(wgtDef.dateFormat)+'"' : JSON.stringify(val);
            },
        },
        time: {
            factory: (props) => <TimeWidget {...props} />,
            timeFormat: 'HH:mm',
            valueFormat: 'HH:mm:ss',
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                let dateVal = moment(val, wgtDef.valueFormat);
                return isForDisplay ? '"'+dateVal.format(wgtDef.timeFormat)+'"' : JSON.stringify(val);
            },
        },
        datetime: {
            factory: (props) => <DateTimeWidget {...props} />,
            timeFormat: 'HH:mm',
            dateFormat: 'DD.MM.YYYY',
            valueFormat: 'YYYY-MM-DD HH:mm:ss',
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                let dateVal = moment(val, wgtDef.valueFormat);
                return isForDisplay ? '"'+dateVal.format(wgtDef.dateFormat + ' ' + wgtDef.timeFormat)+'"' : JSON.stringify(val);
            },
        },
        boolean: {
            factory: (props) => <BooleanWidget {...props} />,
            labelYes: "Yes",
            labelNo: "No ",
            formatValue: (val, fieldDef, wgtDef, isForDisplay) => {
                return isForDisplay ? (val ? "Yes" : "No") : JSON.stringify(!!val);
            },
            defaultValue: false,
        }
    },
    settings: {
        locale: {
            short: 'en',
            full1: 'en-US',
            full2: 'en_US',
        },
        hideConjForOne: true,
        renderSize: 'small',
        renderConjsAsRadios: false,
        renderFieldAndOpAsDropdown: true,
        setOpOnChangeField: ['default'], // 'default' (default if present), 'keep' (keep prev from last field), 'first', 'none'
        clearValueOnChangeField: true, //false - if prev & next fields have same type (widget), keep
        setDefaultFieldAndOp: false,
        maxNesting: 10,
        fieldSeparator: '.',
        fieldSeparatorDisplay: '->',
        showLabels: false,
        valueLabel: "Value",
        valuePlaceholder: "Value",
        fieldLabel: "Field",
        operatorLabel: "Operator",
        fieldPlaceholder: "Select field",
        operatorPlaceholder: "Select operator",
        deleteLabel: null,
        addGroupLabel: "Add group",
        addRuleLabel: "Add rule",
        delGroupLabel: null,
        canLeaveEmptyGroup: true, //after deletion
        formatReverse: (q, operator, reversedOp, operatorDefinition, revOperatorDefinition, isForDisplay) => {
            if (isForDisplay)
                return "NOT(" + q + ")";
            else
                return "!(" + q + ")";
        },
        formatField: (field, parts, label2, fieldDefinition, config, isForDisplay) => {
            if (isForDisplay)
                return label2;
            else
                return field;
        },
    }
};