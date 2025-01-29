import Image from "next/image"
export default function Page() {
    return (
        <div>
            <Image
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="image"
                width={400}
                height={200}
            />
            <label>
                <input type="checkbox" className="mr-2" />
                Zutat 1
            </label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad dicta, odit fugit, maxime mollitia itaque ea soluta cumque, voluptatum alias inventore repudiandae numquam quasi. Illum labore recusandae nemo eligendi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad dicta, odit fugit, maxime mollitia itaque ea soluta cumque, voluptatum alias inventore repudiandae numquam quasi. Illum labore recusandae nemo eligendi!</p>
        </div>
    );
}