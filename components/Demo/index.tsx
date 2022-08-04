import { create, insert, search, formatNanoseconds } from '@nearform/lyra';
import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core';

import { useEffect, useState } from 'react';
import { Container } from '../Container';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const db = create({
  schema: {
    quote: "string",
    author: "string"
  },
});

export function Demo() {

  const [hasDataset, setHasDataset] = useState(false);
  const [isIndexing, setIsIndexing] = useState(false);
  const [indexedNumber, setIndexedNumber] = useState(0);

  const [code, setCode] = useState(
    `import { search } from '@nearform/lyra';
    
const db = create({
  schema: {
    quote: "string",
    author: "string",
  }
});
    
const result = search(db, {
  quote: "I'm a lumberjack and I'm okay",
  author: "Tim",
});
    `
  );

  const [results, setResults] = useState<any[]>([]);
  const [meta, setMeta] = useState<{ count: number, elapsed: bigint }>({ count: 0, elapsed: 0n });

  function downloadDataset() {
    fetch('/dataset/dataset.dpack')
      .then(res => res.text())
      .then(data => {
        setIsIndexing(true);

        const { hits } = search(db, {
          term: 'a',
          limit: 5
        });

        setResults(hits);
        setMeta({ count: Object.keys(db.docs).length, elapsed: 0n });

      })
      .finally(() => {
        setIsIndexing(false);
        setHasDataset(true);
      });
  }


  return (
    <>

      <div className='bg-sky-900 rounded-md'>
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>

    </>
  )
}