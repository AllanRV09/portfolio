import { useState } from "react"

export function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })

        setErrors({
            ...errors,
            [name]: ''
        })
    }

    const validateForm = () => {
        let newErrors = {}

        if (!formData.name.trim()) newErrors.name = "The name is required"

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email) {
            newErrors.email = "The email is required"
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "The email format is invalid"
        }

        if (!formData.message.trim()) newErrors.message = "Tell me a little about your project"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log("Formulario enviado con éxito:", formData)
            alert("¡Gracias! Me pondré en contacto contigo pronto.")
        }
    }

    return (
        <section className="flex flex-col items-center text-center p-[1.5rem] sm:p-[3rem]">
            <div className="p-[1.5rem] sm:p-[3rem] rounded-lg h-full w-full bg-[linear-gradient(0deg,_#1A2A25,_#060f0d)] z-30">
                <h3 className="uppercase m-auto text-4xl max-w-[10ch] font-semibold md:text-5xl lg:text-8xl">Let's Make It Happen</h3>

                <div className="mt-8 border m-auto w-[100%] sm:w-[36rem] px-4 py-8 rounded-xl bg-surface/10">
                    <h4 className="mb-2 font-semibold text-lg tracking-tight sm:text-4xl ">Have a project in mind?</h4>
                    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-7 text-left">
                        <div>
                            <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange}
                                className={`w-full rounded-xl px-4 py-3 bg-surface/15 transition-colors border focus:outline-none focus:border-primary ${errors.name ? 'border-red-400' : 'border-surface'}`}
                            />
                            {errors.name && <p className="mt-2 text-red-400 text-xs">{errors.name}</p>}
                        </div>

                        <div>
                            <input type="text" placeholder="Your email address" name="email" value={formData.email} onChange={handleChange}
                                className={`w-full rounded-xl px-4 py-3 bg-surface/15 transition-colors border focus:outline-none focus:border-primary ${errors.email ? 'border-red-400' : 'border-surface'}`}
                            />
                            {errors.email && <p className="mt-2 text-red-400 text-xs">{errors.email}</p>}
                        </div>

                        <div>
                            <textarea type="text" placeholder="Tell me about your business or project" name="message" value={formData.message} onChange={handleChange}
                                className={`w-full min-h-30 border rounded-xl px-4 py-3 bg-surface/15 resize-none transition-colors border focus:outline-none focus:border-primary ${errors.message ? 'border-red-400' : 'border-surface'}`}
                            />
                            {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                        </div>

                        <button type="submit" className="px-6 py-3.5 text-xs font-semibold leading-4 text-center rounded-xl bg-surface/17 md:whitespace-nowrap lg:text-sm">Get a quote</button>
                    </form>
                </div>
                <span className="mt-8 text-xs font-light text-text/60">Design & build by Allan Rodríguez</span>
            </div>
        </section>
    )
}