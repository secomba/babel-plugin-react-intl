import React, {Component} from 'react';
import {FormattedMarkdown, FormattedNode} from 'react-elements/intl';

export default class Foo extends Component {
    render() {
        return (
            <div>
                <FormattedMarkdown
                    id='foo.bar.baz'
                    defaultMessage='Hello __World__!'
                    description='The default message.'
                />

                <FormattedNode                
                    id="foo.bar.biff"
                    description={`
Trimmed multi
line message
                    `}
                    defaultMessage="Hello Nurse!"
                />
            </div>
        );
    }
}
