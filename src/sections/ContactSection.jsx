import { useState } from "react"

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })

        setErrors({ ...errors, [name]: '' })
        setSubmitStatus(null)
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            setSubmitStatus(null);

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setSubmitStatus('error');
                }
            } catch (error) {
                console.error("Error:", error);
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="contact" data-theme="light" className="relative z-10 -mt-30 flex flex-col items-center text-center p-[1.5rem] sm:p-[3rem] text-surface">
            <div className="p-[1.5rem] sm:p-[3rem] pb-16 sm:pb-24 rounded-lg h-full w-full bg-[linear-gradient(0deg,_#4E4A44,_#0E0E0E)] z-30">
                <h3 className="uppercase m-auto text-[clamp(3.3rem,8vw,6rem)] max-w-[12ch] font-semibold leading-[0.9] tracking-tighter text-surface">Let's Make It Happen</h3>

                <div className="mt-12 border border-surface/10 m-auto w-[100%] md:w-[36rem] px-4 py-12 rounded-xl bg-surface/5">
                    <h4 className="mb-2 font-semibold text-2xl md:text-4xl tracking-tight text-surface">Have a project in mind?</h4>
                    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-7 text-left">
                        <div>
                            <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange}
                                className={`w-full sm:text-xl rounded-xl px-4 py-3 bg-surface/5 text-surface placeholder:text-text transition-colors border focus:outline-none focus:border-accent ${errors.name ? 'border-red-400' : 'border-surface/20'}`}
                            />
                            {errors.name && <p className="mt-4 text-red-400 text-xs">{errors.name}</p>}
                        </div>

                        <div>
                            <input type="text" placeholder="Your email address" name="email" value={formData.email} onChange={handleChange}
                                className={`w-full sm:text-xl rounded-xl px-4 py-3 bg-surface/5 text-surface placeholder:text-text transition-colors border focus:outline-none focus:border-accent ${errors.email ? 'border-red-400' : 'border-surface/20'}`}
                            />
                            {errors.email && <p className="mt-4 text-red-400 text-xs">{errors.email}</p>}
                        </div>

                        <div>
                            <textarea type="text" placeholder="Tell me about your business or project" name="message" value={formData.message} onChange={handleChange}
                                className={`w-full sm:text-xl min-h-30 border rounded-xl px-4 py-3 bg-surface/5 text-surface placeholder:text-text resize-none transition-colors focus:outline-none focus:border-accent ${errors.message ? 'border-red-400' : 'border-surface/20'}`}
                            />
                            {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-4 text-xs sm:text-base font-semibold leading-4 text-center rounded-xl bg-surface text-background hover:bg-accent/90 transition-all md:whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {isSubmitting ? 'Sending...' : 'Get a quote'}
                        </button>

                        {submitStatus === 'success' && (
                            <p className="text-accent text-center font-medium">¡Gracias! Me pondré en contacto contigo pronto.</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-400 text-center font-medium">Hubo un error al enviar. Por favor, inténtalo de nuevo.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}