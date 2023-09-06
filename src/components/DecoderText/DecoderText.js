import { VisuallyHidden } from 'components/VisuallyHidden';
import { useReducedMotion, useSpring } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { delay } from 'utils/delay';
import { classes } from 'utils/style';
import styles from './DecoderText.module.css';

// prettier-ignore
// const glyphs = [
//   'ア', 'イ', 'ウ', 'エ', 'オ',
//   'カ', 'キ', 'ク', 'ケ', 'コ',
//   'サ', 'シ', 'ス', 'セ', 'ソ',
//   'タ', 'チ', 'ツ', 'テ', 'ト',
//   'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
//   'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
//   'マ', 'ミ', 'ム', 'メ', 'モ',
//   'ヤ', 'ユ', 'ヨ', 'ー',
//   'ラ', 'リ', 'ル', 'レ', 'ロ',
//   'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
//   'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
//   'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
//   'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
//   'バ', 'ビ', 'ブ', 'ベ', 'ボ',
//   'パ', 'ピ', 'プ', 'ペ', 'ポ',
// ];

const glyphs = [
  'Α', 'Β', 'Γ', 'Δ', 'Ε',
  'Ζ', 'Η', 'Θ', 'Ι', 'Κ',
  'Λ', 'Μ', 'Ν', 'Ξ', 'Ο',
  'Π', 'Ρ', 'Σ', 'Τ', 'Υ',
  'Φ', 'Χ', 'Ψ', 'Ω', 'α',
  'β', 'γ', 'δ', 'ε', 'ζ',
  'η', 'θ', 'ι', 'κ', 'λ',
  'μ', 'ν', 'ξ', 'ο', 'π',
  'ρ', 'σ', 'τ', 'υ', 'φ',
  'χ', 'ψ', 'ω', 'ϐ', 'ϑ',
  'ϒ', 'ϓ', 'ϔ', 'ϕ', 'ϖ',
  'ϗ', 'Ϙ', 'ϙ', 'Ϛ', 'ϛ',
  'Ϝ', 'ϝ', 'Ϟ', 'ϟ', 'Ϡ',
  'ϡ', 'Ϣ', 'ϣ', 'Ϥ', 'ϥ',
  'Ϧ', 'ϧ', 'Ϩ', 'ϩ', 'Ϫ',
  'ϫ', 'Ϭ', 'ϭ', 'Ϯ', 'ϯ',
  'ϰ', 'ϱ', 'ϲ', 'ϳ', 'ϴ',
  'ϵ', '϶', 'Ϸ', 'ϸ', 'Ϲ',
  'Ϻ', 'ϻ', 'ϼ', 'Ͻ', 'Ͼ',
  'Ͽ', 'Ѐ', 'Ё', 'Ђ', 'Ѓ',
  'Є', 'Ѕ', 'І', 'Ї', 'Ј',
  'Љ', 'Њ', 'Ћ', 'Ќ', 'Ѝ',
  'Ў', 'Џ', 'А', 'Б', 'В',
];


const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 2 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index]?.value };
  });
}

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: '' }]);
    const container = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text.split('');
      let animation;

      const renderOutput = () => {
        const characterMap = output.current.map(item => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });

        containerInstance.innerHTML = characterMap.join('');
      };

      const unsubscribeSpring = decoderSpring.onChange(value => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.map((value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);
