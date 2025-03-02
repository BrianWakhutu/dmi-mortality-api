import { Request, Response } from "express";
import overviewRepository from "../repositories/overview.repository"

export default class OverviewController {
    async findCovid19Summary(req: Request, res: Response) {
        try {
            const numCovid19Summary = await overviewRepository.retrieveCovid19Summary();
            res.status(201).send(numCovid19Summary);
        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving numCovid19Summary"
            });
        }
    }

    async findCovid19SummaryByMonth(req: Request, res: Response) {
        try {
            const numCovid19SummaryByMonth = await overviewRepository.retrieveCovid19SummaryByMonth();
            res.status(201).send(numCovid19SummaryByMonth);
        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving numCovid19SummaryByMonth"
            });
        }
    }

    async findCovid19ScreeningEnrollmentCascade(req: Request, res: Response) {
        try {
            const numCovid19ScreeningEnrolmentCascade = await overviewRepository.retrieveCovid19ScreeningEnrollmentCascade();
            res.status(201).send(numCovid19ScreeningEnrolmentCascade);
        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving numCovid19SummaryByMonth"
            });
        }
    }

    async findNumberEnrolledByFacility(req: Request, res: Response) {
        try {


            const numEnrolledAndPositive = await overviewRepository.retrieveNumberEnrolledByFacility();


            res.status(201).send(numEnrolledAndPositive);

        }
        catch (err) {
            res.status(500).send({

                message: "Some Error occured while retrieving numEnrolledAndPositive"
            });

        }
    }

    async findCovid19ByAgeSex(req: Request, res: Response) {
        try {

            const covid19ByAgeSex = await overviewRepository.retrieveCovid19ByAgeSex();
            res.status(201).send(covid19ByAgeSex);

        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving covid19ByAgeSex"
            });

        }
    }

    async findCovid19OverTime(req: Request, res: Response) {
        try {

            const covid19OverTime = await overviewRepository.retrieveCovid19OverTime();
            res.status(201).send(covid19OverTime);

        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving covid19OverTime"
            });

        }
    }

    async findCovid19Positivity(req: Request, res: Response) {
        try {

            const covid19Positivity = await overviewRepository.retrieveCovid19Positivity();
            res.status(201).send(covid19Positivity);

        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving covid19Positivity"


            });

        }
    }

    async findCovid19PositivityByAgeGender(req: Request, res: Response) {
        try {
            const covid19PositivityByAgeGender = await overviewRepository.retrieveCovid19PositivityByAgeGender();
            res.status(201).send(covid19PositivityByAgeGender);
        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving covid19PositivityByAgeGender"
            });
        }
    }
    async findCovid19PositivityByGender(req: Request, res: Response) {
        try {

            const covid19PositivityByGender = await overviewRepository.retrieveCovid19PositivityByGender();
            res.status(201).send(covid19PositivityByGender);

        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving covid19PositivityByGender"


            });

        }
    }

    async findCovid19OverallPositivityByFacility(req: Request, res: Response) {
        try {

            const covid19PositivityByGender = await overviewRepository.retrieveCovid19OverallPositivityByFacility();
            res.status(201).send(covid19PositivityByGender);

        }
        catch (err) {
            res.status(500).send({
                message: "Some Error occured while retrieving covid19OverallPositivityByFacility"


            });

        }
    }
}