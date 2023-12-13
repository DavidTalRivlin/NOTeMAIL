const { useNavigate, useParams, Link } = ReactRouterDOM

import { mailService } from '../services/mail.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

const { useState, useEffect } = React

export function EditMail() {
    const [mailToEdit, setMailToEdit] = useState(
        mailService.getEmptyMail('user@appsus.com')
    )
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.mailId) loadMail()
    }, [])

    function loadMail() {
        mailService.get(params.mailId).then(setMailToEdit)
    }

    function onSaveMail(ev) {
        ev.preventDefault()
        mailService.save(mailToEdit).then((mail) => {
            onBack()
            showSuccessMsg(`Mail successfully saved! ${mail.id}`)
        })
    }

    function onBack() {
        navigate('/mail')
    }

    function handleInputChange({ target }) {
        var field = target.name
        console.log('🚀  field:', field)
        let value = target.value
        console.log('🚀  value:', value)

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break

            case 'checkbox':
                value = target.checked
                break
        }

        setMailToEdit((prevMailProps) => {
            return {
                ...prevMailProps,
                [field]: value,
                isRead: true,
                sentAt: Date.now(),
                removedAt: null,
                fromName: 'test',

            }
        })
    }

    const { from, to, body, subject } = mailToEdit
    const inputs = [
        {
            htmlFor: 'from',
            label: 'From:',
            type: 'text',
            name: 'from',
            id: 'from',
            value: from,
        },
        {
            htmlFor: 'to',
            label: 'To:',
            type: 'text',
            name: 'to',
            id: 'to',
            value: to,
        },
        {
            htmlFor: 'subject',
            label: 'Subject:',
            type: 'text',
            name: 'subject',
            id: 'subject',
            value: subject,
        },
        {
            htmlFor: 'body',
            label: 'Body:',
            type: 'text',
            name: 'body',
            id: 'body',
            value: body,
        },
       
    ]

    return (
        <section className="edit-mail main-layout full">
            <div className="edit-mail-container">
                <h2>Add a Mail</h2>
                <form onSubmit={onSaveMail}>
                    {inputs.map((input) => {
                        return (
                            <React.Fragment key={input.id}>
                                <label htmlFor={input.htmlFor}>
                                    {input.label}
                                </label>
                                <input
                                    required
                                    type={input.type}
                                    value={input.value || ''}
                                    name={input.name}
                                    id={input.id}
                                    onChange={handleInputChange}
                                />
                            </React.Fragment>
                        )
                    })}

                    <button>Compose</button>
                </form>
            </div>
            <img
                onClick={onBack}
                className="back-img"
                src="./assets/icons/back.svg"
            />
        </section>
    )
}