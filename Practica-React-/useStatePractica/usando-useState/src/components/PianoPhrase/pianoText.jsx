export const PianoText = ({content, author, handleBtn}) => {
  return (
    <section>
            <h2>✨🎹 Your piano phrase 🎹✨</h2>
                {
                    content 
                    ?
                        <>
                            <p>{content}</p>
                            <i>{author}</i>
                        </>
                    : <p>Click to generate a phrase</p>
                }
            <button onClick={handleBtn}> New </button>
    </section>
  )
}
