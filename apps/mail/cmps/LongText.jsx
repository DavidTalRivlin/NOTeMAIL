const { useState } = React

export function LongTxt({ txt, length = 100 }) {
    const [isShowAll, setIsShowAll] = useState(false)
    function getTxt() {
        if (!isLongText() || isShowAll) return txt
        return `${txt.substring(0, length)}...`
    }

    function isLongText() {
        return txt.length > length
    }

    return (
        <section className="long-txt">
            <p>
                {getTxt()}{' '}
                {isLongText() && !isShowAll && (
                    <a onClick={() => setIsShowAll(!isShowAll)}></a>
                )}
            </p>
            {isLongText() && isShowAll && (
                <a onClick={() => setIsShowAll(!isShowAll)}></a>
            )}
        </section>
    )
}
