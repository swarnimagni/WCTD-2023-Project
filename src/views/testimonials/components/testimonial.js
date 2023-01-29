export default function Testimonial(element){   
    return <div className="testimonial">
            <div className="testimonial-name">{element.name}</div>
            <div className="testimonial-desc">{element.testimonial}</div>
        </div>
}