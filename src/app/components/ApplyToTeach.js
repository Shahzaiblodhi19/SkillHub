import { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.svg'; // Ensure this file is in the public folder
import ApplyToTeach1 from '../assets/applyteach1.svg'; // Ensure this file is in the public folder
import ApplyToTeach2 from '../assets/applyteach2.svg'; // Ensure this file is in the public folder
import ApplyToTeach3 from '../assets/applyteach3.svg'; // Ensure this file is in the public folder
import ApplyToTeach4 from '../assets/applyteach4.svg'; // Ensure this file is in the public folder
import ApplyToTeach5 from '../assets/applyteach5.svg'; // Ensure this file is in the public folder
import ApplyToTeach6 from '../assets/applyteach6.svg'; // Ensure this file is in the public folder
import { SettingsInputSvideoTwoTone } from '@mui/icons-material';

export default function ApplyToTeach({ isOpenApplytoTeach, setIsOpenApplytoTeach }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [audience, setAudience] = useState(null);
    const [language, setLanguage] = useState(null);
    const [Teaching, setTeaching] = useState(null);
    const [videoSampleLink, setVideoSampleLink] = useState(null);
    const [holdInCourse, setHoldInCourse] = useState(null);
    const [courseDescription, setCourseDescription] = useState(null);
    const [socialMediaAccount, setSocialMediaAccount] = useState(null);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [isStepMode, setIsStepMode] = useState(false);
    const [teachingCategory, setTeachingCategory] = useState(null);

    const toggleModal = () => {
        setIsOpenApplytoTeach(!isOpenApplytoTeach);
        setCurrentStep(1);
        setSelectedOption(null);
        setLanguage(null);
        setPhone('');
        setTeaching(null);
        setEmail('');
        setHoldInCourse(null);
        setSocialMediaAccount(null);
        setCourseDescription(null);
        setVideoSampleLink(null);
        setAudience(null);
        setFullName('');
        setIsStepMode(false);
        setTeachingCategory(null)
    };

    const handleNext = () => {
        if (currentStep === 1 && !fullName) return alert('Please enter your full name.');
        if (currentStep === 4 && !language) return alert('Please select your language.');
        if (currentStep === 6 && !audience) return alert('Please select your Audience.');
        if (currentStep === 7 && !holdInCourse) return alert('Please select your holding course.');
        if (currentStep === 9 && !courseDescription) return alert('Please enter your Course Description.');
        if (currentStep === 10 && !videoSampleLink) return alert('Please provide your video sample link.');
        if (currentStep === 11 && !socialMediaAccount) return alert('Please provide your social media account link.');
        if (currentStep === 8 && !teachingCategory) return alert('Please select your Teaching category.');
        if (currentStep === 5 && !selectedOption) return alert('Please select an option.');
        if (currentStep === 3 && !phone) return alert('Please enter your phone number.');
        if (currentStep === 2 && !email) return alert('Please enter your email.');
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        if (!Teaching) return alert('Please tell us about your exciteness on teaching on SkillHub');
        alert(`Application Submitted:\nFull Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nLanguage: ${language}\nExperience: ${selectedOption}\nAudience: ${audience}\nHolding Course: ${holdInCourse}\nTeaching Category: ${teachingCategory}
            \nCourse Description: ${courseDescription}\nVideo Sample Link: ${videoSampleLink}\nSocial Media Link: ${socialMediaAccount}\nSocial Media Link: ${Teaching}
            `);
        toggleModal();
    };

    return (
        <div>
            {isOpenApplytoTeach && (
                <div
                    className="modal d-flex align-items-center justify-content-center"
                    style={{
                        display: 'block',
                        background: 'rgba(0, 0, 0, 0.6)',
                    }}
                >
                    <div
                        className="modal-dialog"
                        style={{ maxWidth: '830px', width: '90%', height: '480px' }}
                    >
                        <div className="modal-content bg-light shadow-lg rounded" style={{ height: '100%' }}>
                            <div className="d-flex align-items-center justify-content-between px-4 pt-3 pb-1" style={{ zIndex: '1000' }}>
                                <Image className="logo-full pl-2 pt-1" src={Logo} alt="logo" width={185} height={35} />
                                <button className="close-btn" onClick={toggleModal}>
                                    ✖
                                </button>
                            </div>

                            <div className="modal-body px-4 d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                                {!isStepMode ? (
                                    <div className="row">
                                        {/* Left Column */}
                                        <div className="col-md-6 pr-10">
                                            <div className="row g-3 justify-content-center">
                                                {[
                                                    { src: ApplyToTeach1, text: "Real State" },
                                                    { src: ApplyToTeach2, text: "Entrepreneurship" },
                                                    { src: ApplyToTeach3, text: "Photography" },
                                                    { src: ApplyToTeach4, text: "Baking" },
                                                    { src: ApplyToTeach5, text: "Music" },
                                                    { src: ApplyToTeach6, text: "Art & Design" },
                                                ].map((item, index) => (
                                                    <div key={index} className="col-4 text-center d-flex flex-column align-items-center gap-2">
                                                        <Image
                                                            src={item.src}
                                                            alt={item.text}
                                                            width={100}
                                                            height={100}
                                                        />
                                                        <p className="small text-muted">{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <p className="fw-bold text-dark mt-5 text-left" style={{ fontSize: '21px' }}>Turn your expertise into <br /> revenue</p>
                                        </div>

                                        {/* Right Column */}
                                        <div className="col-md-6" style={{ marginTop: '-50px' }}>
                                            <Image className="logo-full mb-3" style={{ marginLeft: '-3px' }} src={Logo} alt="logo" width={175} height={35} />
                                            <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '21px' }}>Apply to Teach on SkillHub</h5>
                                            <p className='mb-2 text-left' style={{ fontSize: '14px' }}>
                                                This application will ask you to answer questions about yourself and tell us
                                                about the first course you’re interested in teaching.
                                            </p>
                                            <p className='mb-2 text-left' style={{ fontSize: '14px' }}>
                                                <strong>Please note: You will be required to submit a short video
                                                    sample related to your course topic.</strong>
                                            </p>
                                            <p className='mb-2 text-left' style={{ fontSize: '14px' }}>
                                                If you are approved to teach, you will be invited to join{' '}
                                                SkillHub Premium, a free marketing service to help you grow
                                                your online course (T&C apply).
                                            </p>
                                            <p className='mb-2 text-left' style={{ fontSize: '14px' }}>
                                                If you have any questions, please contact us at{' '}
                                                <a
                                                    href="mailto:instructor@example.com"
                                                    style={{ color: 'black', textDecoration: 'underline' }}
                                                >
                                                    instructor@example.com
                                                </a>
                                                .
                                            </p>
                                            <button
                                                style={{ background: '#13C5CD', color: '#fff', fontSize: '14px', borderRadius: '1px' }}
                                                className="btn mt-3"
                                                onClick={() => setIsStepMode(true)}
                                            >
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '-35px', padding: '0100px', height: '100%' }}>
                                        {currentStep === 12 && (
                                            <div>
                                                <h5 className="mb-4 fw-bold text-left" style={{ fontSize: '15px' }}>
                                                    What excites you most about teaching on SkillHub?{' '}
                                                    <span className="text-danger" style={{ fontSize: '11px' }}>
                                                        (Required)
                                                    </span>
                                                </h5>
                                                <p style={{ fontSize: '13px' }}>
                                                    By submitting this form, you acknowledge that you have read, understand, and agree to our <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a>.
                                                </p>
                                                <div className="d-flex flex-column gap-2 mt-2">
                                                    {[
                                                        'Earn recurring income',
                                                        'Grow my network',
                                                        "Make an impact on student's lives",
                                                    ].map((teach, index) => (
                                                        <div
                                                            key={index}
                                                            style={{ background: '#ECECEC' }}
                                                            className={`py-2 px-3 option-card d-flex justify-content-between align-items-center w-100 ${Teaching === teach ? 'selected' : ''}`}
                                                            onClick={() => setTeaching(teach)}
                                                        >
                                                            <p className="mb-0" style={{ fontSize: '12px' }}>{teach}</p>
                                                            {Teaching === teach && <div className="tick">✔</div>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {currentStep === 11 && (
                                            <div>
                                                <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '15px' }}>
                                                    Please Share a link to your most active social media account.{' '}
                                                    <span className="text-danger" style={{ fontSize: '11px' }}>
                                                        (Required)
                                                    </span>
                                                </h5>
                                                <p style={{ fontSize: '13px' }}>
                                                    e.g. Instagram, Twitter, Facebook, Linkedin, etc
                                                </p>
                                                <input
                                                    type="url"
                                                    value={socialMediaAccount}
                                                    onChange={(e) => setSocialMediaAccount(e.target.value)}
                                                    className="form-control teach-input mt-2"
                                                    placeholder="https://"
                                                    required
                                                />
                                            </div>
                                        )}
                                        {currentStep === 10 && (
                                            <div>
                                                <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '15px' }}>
                                                    Please share a video sample.{' '}
                                                    <span className="text-danger" style={{ fontSize: '11px' }}>
                                                        (Required)
                                                    </span>
                                                </h5>
                                                <p style={{ fontSize: '13px' }}>
                                                    Please share a link to a 1–2 minute sample teaching video. In this video, we recommend you touch on: (1) who you are, (2) the topic you're planning to teach.
                                                </p>
                                                <input
                                                    type="url"
                                                    value={videoSampleLink}
                                                    onChange={(e) => setVideoSampleLink(e.target.value)}
                                                    className="form-control teach-input mt-2"
                                                    placeholder="https://"
                                                    required
                                                />
                                            </div>
                                        )}
                                        {currentStep === 9 && (
                                            <div>
                                                <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '15px' }}>
                                                    In 3–5 sentences, tell us about your course topic.{' '}
                                                    <span className="text-danger" style={{ fontSize: '11px' }}>
                                                        (Required)
                                                    </span>
                                                </h5>
                                                <p style={{ fontSize: '13px' }}>
                                                    What will your course cover? What will students take away from your course? Why is it valuable?
                                                </p>
                                                <textarea
                                                    value={courseDescription}
                                                    onChange={(e) => setCourseDescription(e.target.value)}
                                                    className="form-control teach-input mt-2"
                                                    placeholder="Type your answer here..."
                                                    rows="5"
                                                    style={{ resize: 'none' }}
                                                />
                                            </div>
                                        )}
                                        {currentStep === 8 && (
                                            <div>
                                                <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '15px' }}>
                                                    What category are you interested in teaching?{' '}
                                                    <span className="text-danger" style={{ fontSize: '11px' }}>
                                                        (Required)
                                                    </span>
                                                </h5>
                                                <p style={{ fontSize: '13px' }}>
                                                    Select the category that best applies to the first course you would like to teach.
                                                    You are welcome to teach courses in other categories in the future.
                                                </p>
                                                <select
                                                    value={teachingCategory}
                                                    onChange={(e) => setTeachingCategory(e.target.value)}
                                                    className="form-control teach-input mt-2"
                                                    placeholder="Type or select an option"
                                                >
                                                    <option value="null">Type or select an option</option>
                                                    <option value="Mathematics">Mathematics</option>
                                                    <option value="Science">Science</option>
                                                    <option value="Languages">Languages</option>
                                                    <option value="Arts & Humanities">Arts & Humanities</option>
                                                    <option value="Technology">Technology</option>
                                                    <option value="Business">Business</option>
                                                    <option value="Health & Wellness">Health & Wellness</option>
                                                </select>
                                            </div>
                                        )}
                                        {currentStep === 7 && (
                                            <div>
                                                <h5 className="mb-4 fw-bold text-left" style={{ fontSize: '15px' }} >Where are you holding in creating your course? <span className='text-danger' style={{ fontSize: '11px' }}>(Required)</span></h5>
                                                <div className="d-flex flex-column gap-2" >
                                                    {[
                                                        'I have an idea, need to work on developing it',
                                                        'I recorded the video but need to make it more professtional',
                                                        "I have finished my course and i'm ready to launch",
                                                    ].map((holdincourse, index) => (
                                                        <div key={index} style={{ background: '#ECECEC' }} className={`py-2 px-3 option-card d-flex justify-content-between align-items-center w-100 ${holdInCourse === holdincourse ? 'selected' : ''}`} onClick={() => setHoldInCourse(holdincourse)}>
                                                            <p sty className="mb-0" style={{ fontSize: '12px' }}>{holdincourse}</p>
                                                            {holdInCourse === holdincourse && <div className="tick">✔</div>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {currentStep === 6 && (
                                            <div>
                                                <h5 className="mb-4 fw-bold text-left" style={{ fontSize: '15px' }} >Do you have any audience to share your course with? <span className='text-danger' style={{ fontSize: '11px' }}>(Required)</span></h5>
                                                <div className="d-flex flex-column gap-2" >
                                                    {[
                                                        'Not at the moment',
                                                        'I have a small following',
                                                        'I have a sizeable following',
                                                    ].map((audi, index) => (
                                                        <div key={index} style={{ background: '#ECECEC' }} className={`py-2 px-3 option-card d-flex justify-content-between align-items-center w-100 ${audience === audi ? 'selected' : ''}`} onClick={() => setAudience(audi)}>
                                                            <p sty className="mb-0" style={{ fontSize: '12px' }}>{audi}</p>
                                                            {audience === audi && <div className="tick">✔</div>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {currentStep === 5 && (
                                            <div>
                                                <h5 className="mb-4 fw-bold text-left" style={{ fontSize: '15px' }} >What kind of teaching experience do you have? <span className='text-danger' style={{ fontSize: '11px' }}>(Required)</span></h5>
                                                <div className="d-flex flex-column gap-2" >
                                                    {[
                                                        'In person, informally',
                                                        'In person, professionally',
                                                        'Online courses',
                                                        'Zoom',
                                                        "I'm just starting teaching",
                                                    ].map((option, index) => (
                                                        <div key={index} style={{ background: '#ECECEC' }} className={`py-2 px-3 option-card d-flex justify-content-between align-items-center w-100 ${selectedOption === option ? 'selected' : ''}`} onClick={() => setSelectedOption(option)}>
                                                            <p sty className="mb-0" style={{ fontSize: '12px' }}>{option}</p>
                                                            {selectedOption === option && <div className="tick">✔</div>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {currentStep === 4 && (
                                            <div>
                                                <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '15px' }}>What language do you intend to teach in? <span className='text-danger' style={{ fontSize: '11px' }}>(Required)</span></h5>
                                                <div className="d-flex flex-column gap-2">
                                                    {['English', 'Spanish', 'French'].map((lang, index) => (
                                                        <div key={index} style={{ background: '#ECECEC' }} className={`option-card px-3 py-2 d-flex justify-content-between align-items-center w-100 ${language === lang ? 'selected' : ''}`} onClick={() => setLanguage(lang)}>
                                                            <p className="mb-0" style={{ fontSize: '14px' }}>{lang}</p>
                                                            {language === lang && <div className="tick">✔</div>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {currentStep === 3 && (
                                            <div>
                                                <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '15px' }}>What is your phone number? <span className='text-danger' style={{ fontSize: '11px' }}>(Required)</span></h5>
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="form-control teach-input w-100"
                                                    placeholder="Type your phone number here..."
                                                />
                                            </div>
                                        )}

                                        {currentStep === 2 && (
                                            <div>
                                                <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '15px' }}>What is your email address? <span className='text-danger' style={{ fontSize: '11px' }}>(Required)</span></h5>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="form-control teach-input"
                                                    placeholder="Type your email here..."
                                                />
                                            </div>
                                        )}

                                        {currentStep === 1 && (
                                            <div>
                                                <h5 className="mb-3 fw-bold text-left" style={{ fontSize: '15px' }}>What is your full name? <span className='text-danger' style={{ fontSize: '11px' }}>(Required)</span></h5>
                                                <input
                                                    type="text"
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    className="form-control teach-input"
                                                    placeholder="Type your name here..."
                                                />
                                            </div>
                                        )}

                                        {/* Navigation Buttons */}
                                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'end', gap: '10px' }}>
                                            {currentStep > 1 && (
                                                <button className="btn px-3 d-flex align-items-center gap-1" style={{ background: '#E6E6E6', color: '#656565', fontSize: '14px', borderRadius: '1px' }} onClick={handleBack}>
                                                    <svg width={10} height={10} viewBox="0 0 25 40"><path fill='#656565' d="M24.2349 4.20503C24.5099 4.47811 24.5107 4.92268 24.2367 5.19673L9.92837 19.505C9.65501 19.7784 9.65501 20.2216 9.92837 20.495L24.2367 34.8033C24.5107 35.0773 24.5099 35.5219 24.2349 35.795L20.495 39.5085C20.2214 39.7802 19.7795 39.7795 19.5068 39.5068L0.495041 20.495C0.221674 20.2216 0.221673 19.7784 0.49504 19.505L19.5068 0.49323C19.7795 0.220545 20.2214 0.219764 20.495 0.491483L24.2349 4.20503Z"></path></svg> Back
                                                </button>
                                            )}
                                            {currentStep < 12 && (
                                                <button className="btn px-3 d-flex align-items-center gap-1" style={{ background: '#13C5CD', color: '#fff', fontSize: '14px', borderRadius: '1px' }} onClick={handleNext}>
                                                    Next <svg width={10} height={10} viewBox="0 0 25 40"><path fill='white' d="M0.494387 4.20556C0.221231 4.47872 0.22099 4.92152 0.493848 5.19497L14.7733 19.5056C15.0459 19.7788 15.0459 20.2212 14.7733 20.4944L0.493849 34.805C0.220991 35.0785 0.221231 35.5213 0.494388 35.7944L4.20498 39.505C4.47834 39.7784 4.92156 39.7784 5.19493 39.505L24.205 20.495C24.4783 20.2216 24.4783 19.7784 24.205 19.505L5.19493 0.494976C4.92156 0.221609 4.47834 0.221608 4.20498 0.494975L0.494387 4.20556Z"></path></svg>
                                                </button>
                                            )}
                                            {currentStep === 12 && (
                                                <button className="btn pl-3 pr-2 d-flex align-items-center" style={{ background: '#367095', color: '#fff', fontSize: '14px', borderRadius: '1px' }} onClick={handleSubmit}>
                                                    Submit <svg style={{ marginBottom: '1px', rotate: '-16deg' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 56 56" fill="none">
                                                        <path d="M41.4646 22.2658C41.6356 21.6257 41.5457 20.944 41.2144 20.3702C40.8832 19.7965 40.3377 19.3777 39.6979 19.2058L26.8183 15.7511C26.1777 15.5794 25.4951 15.6693 24.9207 16.0009C24.3463 16.3325 23.9272 16.8788 23.7555 17.5194C23.5838 18.1601 23.6737 18.8427 24.0053 19.4171C24.337 19.9915 24.8832 20.4106 25.5238 20.5823L32.5734 22.4724L15.924 32.0849C15.3498 32.4164 14.9308 32.9625 14.7592 33.6029C14.5876 34.2434 14.6774 34.9257 15.009 35.5C15.3405 36.0742 15.8865 36.4932 16.527 36.6648C17.1674 36.8364 17.8498 36.7465 18.424 36.415L35.0734 26.8025L33.1847 33.8512C33.0997 34.1684 33.078 34.4993 33.1209 34.8249C33.1637 35.1505 33.2703 35.4644 33.4345 35.7489C33.5987 36.0333 33.8173 36.2826 34.0779 36.4825C34.3384 36.6824 34.6358 36.8291 34.953 36.914C35.2702 36.999 35.6011 37.0207 35.9267 36.9779C36.2523 36.935 36.5662 36.8284 36.8507 36.6642C37.1351 36.5 37.3844 36.2814 37.5843 36.0209C37.7842 35.7603 37.9308 35.4629 38.0158 35.1457L41.4646 22.2658Z" fill="white" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
