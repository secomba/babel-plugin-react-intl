import React, {Component} from 'react';
import * as Namespace from 'react-elements/namespace';

export default class ScopedFoo extends Component {
    render() {
        return (
            <div>
                <Namespace.Formatted
                    id='foo.bar.baz'
                    defaultMessage='Hello __World__!'
                    description='The default message.'
                />

                <Namespace.Formatted.Node                
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
