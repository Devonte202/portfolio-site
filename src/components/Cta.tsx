
interface CtaProps {
  text: string;
  onclick?: () => void | undefined;
  href?: string | undefined;
  isLink?: boolean;
}

export default function Cta(props: CtaProps) {
  const { text, isLink, onclick, href } = props
  return (
    <>
    {isLink ? (
    <a className="Btn" href={href}>
      {text}
    </a>
    ) : (
    <button onClick={onclick} className="Btn">
      {text}
    </button>
    )}
    <style jsx global>
      {`
       .Btn {
        padding: 15px;
        background: #e0e0e0;
        border: none;
        border-radius: .5rem;
        color: #444;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        outline: none;
        width: 40%;
        cursor: pointer;
        transition: .2s ease-in-out;
      }
      .Btn:hover {
        box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
                    -6px -6px 10px rgba(255, 255, 255, .5),
                    6px 6px 8px rgba(255, 255, 255, .075),
                    6px 6px 10px rgba(0, 0, 0, .15);
      }
      .Btn:active {
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
                    inset -2px -2px 4px rgba(255, 255, 255, .5),
                    inset 2px 2px 2px rgba(255, 255, 255, .075),
                    inset 2px 2px 4px rgba(0, 0, 0, .15);
      }
    `}</style>
    </>
  )
}
