import React, { Component } from 'react'

export class card extends Component {
  render() {
    return (
      <div>
<div class="flex items-center my-4 w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Professor</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Specialisation</td>
                    <td class="px-2 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur porro repudiandae iure accusantium animi eius.</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
            </div>

        </div>
    </div>
</div>

</div>
      </div>
    )
  }
}

export default card