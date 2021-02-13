import React, { useState } from 'react';
import '../con4dnz/quiz.css';
export default function Quiz() {
	const questions = [
		{
			questionText: 'How are you feeling today?',
			answerOptions: [
				{ answerText: 'Senitive', isCorrect: true },
				{ answerText: 'Mood Swings', isCorrect: true },
				{ answerText: 'Emotional', isCorrect: true },
                { answerText: 'Irritable', isCorrect: true },
                { answerText: 'Worried', isCorrect: true },
                { answerText: 'Confused', isCorrect: true },
                { answerText: 'Disappointed', isCorrect: true },
                { answerText: 'Tired', isCorrect: true },
                { answerText: 'Stressed', isCorrect: true },
                { answerText: 'Sad', isCorrect: true },
                { answerText: 'Normal', isCorrect: true },
                { answerText: 'Happy', isCorrect: true },
                { answerText: 'Angry', isCorrect: true },
                { answerText: 'Panicky', isCorrect: true },
                { answerText: 'Frisky', isCorrect: true },
                { answerText: 'Depressed', isCorrect: true },
                { answerText: 'Anxious', isCorrect: true },
                { answerText: 'Bored', isCorrect: true },
                { answerText: 'Exicited', isCorrect: true },
                { answerText: 'Gassed', isCorrect: true },
                { answerText: 'Hopeful', isCorrect: true },
                { answerText: 'Beaming', isCorrect: true },
                { answerText: 'Loved', isCorrect: true },
                { answerText: 'Ready', isCorrect: true },
                { answerText: 'Spiritual', isCorrect: true },
            ],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];


const [currentQuestion, setCurrentQuestion] = useState(0);
	return (
		<div className='quizapp'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOptions)=> <button>{answerOptions.answerText}</button>
                        )}
					</div>
				</>
			)}
		</div>
	);
}