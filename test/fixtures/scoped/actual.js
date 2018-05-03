import React, {Component} from 'react';
import {Formatted} from 'react-elements/scoped';

export default class ScopedFoo extends Component {
    render() {
        return (
            <div>
                <Formatted.Markdown
                    id='foo.bar.baz'
                    defaultMessage='Hello __World__!'
                    description='The default message.'
                />

                <Formatted.Node                
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
