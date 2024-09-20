import React from "react";

function TermsConditions() {
  return (
    <div className="w-3/4 border border-black rounded-lg p-8">
      <h1 className="text-3xl font-normal mb-4 text-black">Terms & Condition</h1>
      <ul className="list-disc ml-6 text-black">
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Molestie tortor tempor sed ultricies molestie dis iaculis.</li>
        <li>Faucibus lobortis sit velit aliquam.</li>
        <li>Enim id dictum aliquam ipsum.</li>
        <li>elementum. Viverra aliquam odio dictumst neque lacus amet.</li>
        <li>Elementum massa at vulputate mauris. Lacus consectetur</li>
        <li>consectetur condimentum nulla blandit in nulla. A enean quam.</li>
        <li>enim dictum elit mauris faucibus tincidunt pellentesque.</li>
        <li>Tellus placerat risus habitasse netus duis ultrices est nulla.</li>
        <li>Duis diam nec etiam mollis nulla mi rutrum.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Molestie tortor tempor sed ultricies molestie dis iaculis.</li>
        <li>
          Faucibus lobortis sit velit aliquam. Enim id dictum aliquam elementum.
          Viverra aliquam.
        </li>
        <li>Odio dictumst neque lacus amet. </li>
      </ul>
      <div className="mt-6 flex flex-row items-center justify-center">
        <input
          type="checkbox"
          id="acceptTerms"
          className="form-checkbox h-5 w-5 text-indigo-600"
        />
        <label htmlFor="acceptTerms" className="ml-2 text-black font-bold">
          I accept these terms and conditions
        </label>
      </div>
    </div>
  );
}

export default TermsConditions;
