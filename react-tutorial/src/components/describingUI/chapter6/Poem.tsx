const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export const Poem = () => {
  const poemCompents: any = [];
  poem.lines.forEach((line: string, index: number) => {
    poemCompents.push(<p key={`poem-${index}`}>{line}</p>);

    if (index === poem.lines.length - 1) {
      return;
    }

    poemCompents.push(<hr key={`horizontal-line-${index}`}/>);
  });

  return (
    <article>
      {poemCompents}
    </article>
  );
}
