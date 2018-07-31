import * as p from 'path';
import * as fs from 'fs';
import {transformFileSync} from 'babel-core';
import plugin from '../src/index';

const baseDir = p.resolve(`${__dirname}/../test/fixtures`);

const fixtures = [
    'defineMessages',
    'descriptionsAsObjects',
    ['extractSourceLocation', {
        extractSourceLocation: true,
    }],
    'FormattedHTMLMessage',
    'FormattedMessage',
    ['moduleSourceName', {
        moduleSourceName: 'react-i18n',
    }],
    ['additionalComponents', {
        additionalComponents: [
            {
                moduleSourceName: 'react-elements/intl',
                componentNames: ['FormattedMarkdown', 'FormattedNode'],
            }            
        ],
    }],
    ['scoped', {
        additionalComponents: [
            {
                moduleSourceName: 'react-elements/scoped',
                componentNames: ['Formatted.Node', 'Formatted.Markdown'],
            }        
        ],
    }],
    ['namespaceImport', {
        additionalComponents: [
            {
                moduleSourceName: 'react-elements/namespace',
                componentNames: ['Formatted.Node', 'Formatted'],
            }        
        ],
    }],
];

fixtures.forEach((fixture) => {
    let name = fixture;
    let options = {};
    if (Array.isArray(fixture)) {
        [name, options] = fixture;
    }

    let {code, metadata} = transformFileSync(`${baseDir}/${name}/actual.js`, {
        plugins: [
            [plugin, {
                ...options,
                messagesDir: false,
            }],
        ],
    });

    let messages = JSON.stringify(metadata['react-intl'].messages, null, 2);
    
    fs.writeFileSync(`${baseDir}/${name}/expected.js`, `${code}\n`);
    fs.writeFileSync(`${baseDir}/${name}/expected.json`, `${messages}\n`);
});
