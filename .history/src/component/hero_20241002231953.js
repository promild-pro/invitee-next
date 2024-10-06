// import React from "react";

export default function Hero() {
    return(
    <section>
        <div className="bg-slate-600  w-full">
            <p className="text-white text-center" style={<div
                class="card text-white bg-primary"
            >
                <img class="card-img-top" src="holder.js/100px180/" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Text</p>
                </div>
            </div>
            }>The Wedding of</p>
            <h2>Dilan <span>&</span>Milea</h2>
        </div>
    </section>
    );
}